
const _ = require('lodash');
const data = require('../../../data');
const forApi = require('./forApi');
const forTests = require('kdo')('./forTests');

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
					forApi.convertDefinitionsObjectToArray(apiDefines, result);
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

	forTests() {
		data.sysNames.forEach(sysName => {
			const defineJs = data.defineJs[sysName];
			if (!defineJs.raw) return;

			defineJs.tests = forTests.parse(defineJs.raw);
		});
	},
};

/** @name define.parseDefineJs */
const me = {

	// defineJs: {api}
	forRunning() {
		parseDefineJs.forApi();
	},

	// defineJs: {api, tests}
	forTesting() {
		parseDefineJs.forApi();
		parseDefineJs.forTests();
	},
};

module.exports = me;
