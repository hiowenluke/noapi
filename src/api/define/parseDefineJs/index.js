
const _ = require('lodash');
const v = require('voca');
const data = require('../../../data');
const forApi = require('./forApi');
const forDocs = require('kdo')('./forDocs');

const isApiDefinition = (obj) => {

	// obj {
	//		api: '/bill/form/crud',
	//		url: 'http://xxx',
	//		params: {
	//			...
	//		}
	// }
	return !!(
		(obj.api && typeof obj.api === 'string' && obj.api.substr(0, 1) === '/') ||
		(obj.url && typeof obj.url === 'string' && /^http(s)*:\/\//i.test(obj.url)) ||
		(obj.params && _.isPlainObject(obj.params)) ||
	0);
};

const isEmptyObject = (obj) => {
	// obj {
	//		form: {
	// 				crud: {
	//					// no property
	// 				}
	// 		}
	// }
	return _.isPlainObject(obj) && Object.keys(obj).length === 0;
};

const convertDefinesObjectToArray = (obj, arr = [], apiPath = '') => {
	Object.keys(obj).forEach(key => {
		const def = obj[key];

		// Multiple api definitions, e.g.:
		// {
		//		form: {
		//			check: [
		// 					{
		// 						url: 'http://localhost:3000/bill/form/check?billid=123&act=check',
		// 						result: {
		// 							"success": true,
		// 							"data": {
		// 								"billid": "123",
		// 								"checked": true
		// 							}
		// 						}
		// 					},
		// 					{
		// 						url: 'http://localhost:3000/bill/form/check?billid=123&act=uncheck',
		// 						result: {
		// 							"success": true,
		// 							"data": {
		// 								"billid": "123",
		// 								"checked": false
		// 							}
		// 						}
		// 					},
		//			]
		//		}
		// }
		if (Array.isArray(def)) {
			def.forEach(item => {

				// This will replace the {api} in definition.
				item.api = apiPath + '/' + key;
				arr.push(item);
			});
		}

		else

		// One api definition, e.g.:
		// 	{
		// 		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		// 		result: {
		// 			"success": true,
		// 			"data": {
		// 				"formname": "trader"
		// 			}
		// 		}
		// 	}
		if (isApiDefinition(def)) {

			// This will replace the {api} in definition.
			def.api = apiPath + '/' + key;
			arr.push(def);
		}

		else

		// No api definition, e.g.:
		// 		.../bill/form/crud.js is empty file
		if (isEmptyObject(def)) {
			def.api = apiPath + '/' + key;
			arr.push(def);
		}

		else {
			// Structure
			convertDefinesObjectToArray(def, arr, apiPath + '/' + key);
		}
	});

	return arr;
};

const parseDefineJs = {
	forApi() {
		data.sysNames.forEach(sysName => {

			const defineObject = data.core[sysName].api;
			const defineJs = data.defineJs[sysName];

			let apiDefines;

			// If the api directory has been loaded as an api definition object, use it
			if (defineObject) {
				apiDefines = defineObject;
			}
			else {
				// Get the api definition from define.js
				const filename = defineJs.filename;
				if (!filename) return;
				apiDefines = require(filename);
			}

			// [
			// 		{
			// 			url: 'http://localhost:3000/bill/form/crud?formname=trader',
			// 			result: {
			// 				"success": true,
			// 				"data": {
			// 					"formname": "trader"
			// 				}
			// 			}
			//		},
			// ]
			if (!Array.isArray(apiDefines)) {

				// {
				//		bill: {
				//			form: {
				//				crud: {
				//					url: 'http://localhost:3000/xxx',
				//					result: {
				//						...
				//					}
				//				}
				//			}
				//		},
				//		...
				// }
				if (_.isPlainObject(apiDefines)) {
					const result = [];
					convertDefinesObjectToArray(apiDefines, result);
					apiDefines = result;
				}
				else {
					// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
					apiDefines = [apiDefines];
				}
			}

			defineJs.api = forApi.parse(apiDefines);
			defineJs.raw = apiDefines;
		});
	},

	forDocs() {
		data.sysNames.forEach(sysName => {
			const defineJs = data.defineJs[sysName];
			defineJs.docs = forDocs.parse(defineJs.raw);
		});
	},
};

/** @name define.parseDefineJs */
const me = {

	// defineJs: {api}
	forRun() {
		parseDefineJs.forApi();
	},

	// defineJs: {api, docs}
	forTest() {
		debugger;

		parseDefineJs.forApi();
		parseDefineJs.forDocs();
	},
};

module.exports = me;
