
const fs = require('fs');
const data = require('../data');
const config = require('../config');

const parseParamsNames = (str) => { // "(a, b = '', c) => {}"
	const temp = str.match(/\((.*?)\)/); // "a, b = '', c"
	if (!temp) return null;

	const params = temp[1].split(','); // ['a', " b = ''", ' c']
	const names = params.map(item => item.replace(/(^\s*?(?=\b))|(\s*?$)/g, '').split('=')[0]); // ['a', 'b', 'c']

	return names;
};

const me = {
	data: {},

	init() {
		const root = config.webServiceRoot;
		const bizFolder = config.folder.replace(/^./, ''); // ./biz => /biz
		const apis = data.apis;

		apis.forEach(api => {
			const filePath = root + bizFolder + api + '.js';
			if (!fs.existsSync(filePath)) return;

			const bizFile = require(filePath);
			const content = bizFile.toString(); // "(a, b = '', c) => {}"

			const names = parseParamsNames(content);
			this.data[api] = names;
		});
	},

	getByApi(api) {
		return this.data[api] || [];
	}
};

module.exports = me;
