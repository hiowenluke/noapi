
const _ = require('lodash');

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

const convertDefinitionsObjectToArray = (obj, arr = [], api = '') => {
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
				item.api = api + '/' + key;
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
			def.api = api + '/' + key;
			arr.push(def);
		}

		else

		// No api definition, e.g.:
		// 		.../bill/form/crud.js is empty file
		if (isEmptyObject(def)) {
			def.api = api + '/' + key;
			arr.push(def);
		}

		else {
			// Structure
			convertDefinitionsObjectToArray(def, arr, api + '/' + key);
		}
	});

	return arr;
};

/** @name converter.definitionsObjectToArray */
const fn = (...args) => {
	return convertDefinitionsObjectToArray(...args);
};

module.exports = fn;
