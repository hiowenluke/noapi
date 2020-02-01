
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
		const bizDir = config.dir.replace(/^./, ''); // ./biz => /biz
		const apis = data.apis;

		apis.forEach(api => {
			let filePath = root + bizDir + api;

			// The filePath will be exists if it is a directory
			if (!fs.existsSync(filePath)) {

				// If it it not exists, then check for .js file
				filePath += '.js';

				// If not found, then ignore it
				if (!fs.existsSync(filePath)) return;
			}

			// Require the directory or js file
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
