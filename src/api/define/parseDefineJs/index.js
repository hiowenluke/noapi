
const _ = require('lodash');
const v = require('voca');
const data = require('../../../data');
const forApi = require('./forApi');
const forDocs = require('kdo')('./forDocs');

const isApiDefinition = (obj) => {
	return !!((obj.url || obj.params) && (obj.result || obj.test));
};

const convertDefinesObjectToArray = (obj, arr = [], apiPath = '') => {
	Object.keys(obj).forEach(key => {
		const def = obj[key];

		// Multiple api definitions
		if (Array.isArray(def)) {
			def.forEach(item => {

				// This will replace the {api} in definition.
				item.api = apiPath + '/' + key;
				arr.push(item);
			});
		}

		else

		// One api definition
		if (isApiDefinition(def)) {

			// This will replace the {api} in definition.
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
	do(type) {
		const method = 'for' + v.titleCase(type); // apiInfos => forApiInfos

		data.sysNames.forEach(sysName => {
			const defineJs = data.defineJs[sysName];
			const filename = defineJs.filename;
			if (!filename) return;

			let apiDefines = require(filename);

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

			else

			// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
			if (!Array.isArray(apiDefines)) {
				apiDefines = [apiDefines];
			}

			defineJs[type] = this[method](apiDefines);
		});
	},

	forApi(apiDefineArr) {
		return forApi.parse(apiDefineArr);
	},

	forDocs(apiDefineArr) {
		return forDocs.parse(apiDefineArr);
	},
};

/** @name define.parseDefineJs */
const me = {

	// defineJs: {api}
	forRun() {
		parseDefineJs.do('api');
	},

	// defineJs: {api, docs}
	forTest() {
		parseDefineJs.do('api');
		parseDefineJs.do('docs');
	},
};

module.exports = me;
