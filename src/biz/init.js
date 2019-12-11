
const fs = require('fs');

const bizDo = require('./do');
const data = require('../data');
const lib = require('../__lib');

const parseParams = (str) => {// "(a, b = '', c) => {}"
	const temp = str.match(/\((.*?)\)/); // "a, b = '', c"
	if (!temp) return null;

	let params = temp[1].split(','); // ['a', " b = ''", ' c']
	params = params.map(item => item.replace(/(^\s*?(?=\b))|(\s*?$)/g, '').split('=')[0]); // ['a', 'b', 'c']

	return params;
};

const getBizParams = () => {
	const root = data.webServiceRoot;
	const bizParams = {};
	const biz = data.core.biz;

	if (biz) {
		// {say: hi: {}} => "/say/hi"
		const bizPaths = lib.apiParser.objectToApis(biz);

		bizPaths.forEach(bizPath => {
			const filePath = root + '/biz' + bizPath + '.js';
			if (!fs.existsSync(filePath)) return;

			const bizFile = require(filePath);
			const content = bizFile.toString(); // "(a, b = '', c) => {}"
			const params = parseParams(content);

			bizParams[bizPath] = params;
		});
	}

	return bizParams;
};

const fn = () => {

	global.biz = {};

	// Add global.biz.do to convenient api quick calls to its biz method
	// 		complete: 		data.core.do.basic.say.hi(query)
	// 		Shorthand: 		global.biz.do(query)
	global.biz.do = bizDo;

	// Use data.global.biz instead of global.biz in noapi to improve performance.
	data.global.biz = {};
	data.global.biz.do = bizDo;

	data.bizParams = getBizParams();
};

module.exports = fn;
