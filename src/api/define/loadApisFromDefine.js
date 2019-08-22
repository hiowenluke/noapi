
const _ = require('lodash');
const data = require('../../data');
const lib = require('../../__lib');

/** @name define.loadApisFromDefine */
const fn = () => {
	data.sysNames.forEach(sysName => {
		const defineJs = data.defineJs[sysName];
		const apiInfos = defineJs.api;
		if (!apiInfos || !apiInfos.length) return;

		const core = data.core[sysName];

		// Always initialize the core.api as empty object,
		// even though it has been loaded from the api directory.
		core.api = {};

		const apiUrls = apiInfos.map(item => item.api);
		apiUrls.forEach(apiUrl => { // /form:/bill/form/crud
			const {apiPath} = lib.apiParser.apiUrlToSysNameAndApiPath(apiUrl); // /bill/form/crud
			const apiObject = lib.apiParser.apiPathToObject(apiPath); // {bill: {form: {crud: {}}}}
			core.api = _.merge(core.api, apiObject);
		});
	});
};

module.exports = fn;
