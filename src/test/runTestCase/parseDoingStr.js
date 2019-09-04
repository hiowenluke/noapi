
const data = require('../../data');
const lib = require('../../__lib');

// Doing str:
// 		'/bill/form/crud', // by api
// 		'Bill - Form - Crud', // by title
// 		'http://localhost:3000/bill/form/crud?formname=trader', // by url

const me = {
	forApiDefinition(doingStr) {
		const serviceName = data.testOptions.serviceName;
		const sysName = data.serviceSysNames[serviceName];
		const defineJs = data.defineJs[sysName];
		const {api, tests} = defineJs;

		const property = doingStr.substr(0, 1) === '/' ? 'api' : lib.isUrl(doingStr) ? 'url' : 'title';
		const index = api.findIndex(item => item[property] === doingStr);

		// If it is found
		if (index >= 0) {
			const apiInfo = api[index];
			const testInfos = tests[index];

			// There may be more than one in the testInfos array, only the first one is taken here.
			// If the firstOne is undefined, set it to an empty object.
			const firstOne = testInfos[0] || {};
			const ioInfo = firstOne.io;
			const testInfo = firstOne.test;

			return {apiInfo, ioInfo, testInfo};
		}
		else {
			// If it is not found

			// If the doingStr is a url, maybe it is not listed in api defines, e.g.:
			//		In "55-[test]-test.getResult" define.js, in array test.beforeDo, there is a url like below:
			// 				http://localhost:3000/user/add?username=IronMan
			//		that url is not belongs to any of the apis in define.js,
			//		so there is no apiInfo corresponding to it.
			//
			// Then we should to return it as apiInfo.url.
			if (property === 'url') {
				const apiInfo = {url: doingStr};
				return {apiInfo};
			}
		}
	},

	forTestUrl(doingStr) {
		const apiDefinition = this.forApiDefinition(doingStr);
		if (apiDefinition) {
			return apiDefinition.apiInfo.url;
		}
	}
};

module.exports = me;
