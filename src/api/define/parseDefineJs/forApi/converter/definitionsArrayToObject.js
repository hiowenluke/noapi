
const _ = require('lodash');
const lib = require('../../../../../__lib');

const convertApiToKeyPath = (api) => {
	return api.replace(/^\//, '').replace(/\//g, '.');
};

/** @name converter.definitionsArrayToObject */
const fn = (definitionsArr) => {
	const object = {};

	definitionsArr.forEach(item => {
		let {api, url} = item;
		if (!api) {
			// http://localhost:3000/bill/form/crud?formname=trader => /bill/form/crud
			api = lib.urlParser.getApiFromUrl(url);
		}

		// "/bill/form/crud" => {bill: {form: {crud: {}}}}
		const branchObj = lib.apiParser.apiToObject(api);
		const apiPath = convertApiToKeyPath(api);
		_.set(branchObj, apiPath, item);

		_.merge(object, branchObj);
	});

	return object;
};

module.exports = fn;


