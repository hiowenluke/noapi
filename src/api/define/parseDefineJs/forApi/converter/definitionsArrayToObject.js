
const _ = require('lodash');
const lib = require('../../../../../__lib');

const convertApiToKeyPath = (api) => {
	return api.replace(/^\//, '').replace(/\//g, '.');
};

/** @name converter.definitionsArrayToObject */
const fn = (definitionsArr) => {
	const object = {};

	definitionsArr.forEach(definition => {
		let {api, url} = definition;
		if (!api) {
			// http://localhost:3000/bill/form/crud?formname=trader => /bill/form/crud
			api = lib.urlParser.getApiFromUrl(url);
		}

		const apiPath = convertApiToKeyPath(api);
		const defObj = _.get(object, apiPath);

		// If the definition object corresponding to apiPath is already exists,
		if (defObj) {

			// If it is array, then push the new one into it.
			if (Array.isArray(defObj)) {
				const arr = defObj;
				arr.push(definition);
				_.set(object, apiPath, arr);
			}
			else {

				// If it is object, then combine it and the new one to an array.
				const arr = [defObj, definition];
				_.set(object, apiPath, arr);
			}
		}
		else {

			// "/bill/form/crud" => {bill: {form: {crud: {}}}}
			const branchObj = lib.apiParser.apiToObject(api);
			_.set(branchObj, apiPath, definition);

			_.merge(object, branchObj);
		}

	});

	return object;
};

module.exports = fn;


