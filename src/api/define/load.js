
const data = require('../../data');
const lib = require('../../__lib');
const parse = require('./parse');

/** @name define.load */
const fn = () => {
	const apiInfos = parse.forApiInfos();
	if (!apiInfos) return;

	const apis = apiInfos.map(item => item.api);
	apis.forEach(api => { // /bill/form/crud
		const {sysName, apiPath} = lib.parseApiUrlToSysNameAndApiPath(api);
		data.core[sysName].api = lib.parseApiPathToObject(apiPath);
	});
};

module.exports = fn;
