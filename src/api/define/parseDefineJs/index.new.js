
const _ = require('lodash');
const v = require('voca');
const data = require('../../../data');
const forApi = require('./forApi');
const forDocs = require('kdo')('./forDocs');

const isApiDefinition = (obj) => {
	return obj.url;
};

const convertDefinesObjectToArray = (obj, arr = []) => {
	Object.keys(obj).forEach(key => {

		// Api definition
		if (isApiDefinition(obj[key])) {
			arr.push(obj[key]);
		}
		else {
			// Structure
			convertDefinesObjectToArray(obj[key], arr);
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
				apiDefines = convertDefinesObjectToArray(apiDefines);
			}

			// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
			if (typeof apiDefines === 'string') {
				apiDefines = [apiDefines];
			}

			// [
			//		'http://localhost:3000/xxx',
			//
			//		{
			//			url: 'http://localhost:3000/xxx',
			//			result: {
			//				...
			//			}
			//		},
			//
			//		...
			// ]
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
