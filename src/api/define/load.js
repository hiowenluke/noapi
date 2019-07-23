
const _ = require('lodash');
const data = require('../../data');
const lib = require('../../__lib');
const parse = require('./parse');

/** @name define.load */
const fn = () => {
	const apiInfos = parse.forApiInfos();
	if (!apiInfos) return;

	const apis = apiInfos.map(item => item.api);
	apis.forEach(api => { // /bill/form/crud
		const {sysName, apiPath} = lib.apiParser.parseApiUrlToSysNameAndApiPath(api);
		const apis = lib.apiParser.parseApiPathToObject(apiPath);

		const core = data.core[sysName];
		if (!core.api) core.api = {};
		core.api = _.merge(core.api, apis);
	});
};

module.exports = fn;
