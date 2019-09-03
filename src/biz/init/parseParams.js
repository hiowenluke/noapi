
const data = require('../../data');
const lib = require('../../__lib');

const parseParams = (str) => {// "(a, b = '', c) => {}"
	const temp = str.match(/\((.*?)\)/); // "a, b = '', c"
	if (!temp) return null;

	let params = temp[1].split(','); // ['a', " b = ''", ' c']
	params = params.map(item => item.replace(/(^\s*?(?=\b))|(\s*?$)/g, '').split('=')[0]); // ['a', 'b', 'c']

	return params;
};

const parseBiz = (serviceName) => {
	const apiServiceRoot = data.apiServicesRoot[serviceName];
	const sysName = data.serviceSysNames[serviceName];

	const bizParams = {};
	const biz = data.core[sysName].biz;

	if (biz) {
		// {bill: form: crud: {}} => "/bill/form/crud"
		const bizPaths = lib.apiParser.objectToApis(biz);

		bizPaths.forEach(bizPath => {
			const bizFile = require(apiServiceRoot + '/biz' + bizPath);
			const content = bizFile.toString(); // "(a, b = '', c) => {}"
			const params = parseParams(content);
			bizParams[bizPath] = params;
		});
	}

	data.bizParams[sysName] = bizParams;
};

/** @name me.parseParams */
const fn = () => {
	const serviceNames = data.serviceNames;
	serviceNames.forEach(serviceName => parseBiz(serviceName));
};

module.exports = fn;
