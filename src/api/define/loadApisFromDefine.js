
const _ = require('lodash');
const data = require('../../data');
const lib = require('../../__lib');

/** @name define.loadApisFromDefine */
const fn = () => {
	data.sysNames.forEach(sysName => {
		const core = data.core[sysName];
		const apiInfos = core.apiInfos;
		if (!core.api) core.api = {};

		const apiUrls = apiInfos.map(item => item.api);
		apiUrls.forEach(apiUrl => { // /form:/bill/form/crud
			const {apiPath} = lib.apiParser.parseApiUrlToSysNameAndApiPath(apiUrl); // /bill/form/crud
			const apiObject = lib.apiParser.parseApiPathToObject(apiPath); // {bill: {form: {crud: {}}}}
			core.api = _.merge(core.api, apiObject);
		});
	});
};

module.exports = fn;
