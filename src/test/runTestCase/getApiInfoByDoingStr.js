
const data = require('../../data');

// types:
// 		'/bill/form/crud', // by api
// 		'Bill - Form - Crud', // by title
// 		'http://localhost:3000/bill/form/crud?formname=trader', // by url

const fn = (typeStr) => {
	let result;

	data.sysNames.find(sysName => {
		const defineJs = data.defineJs[sysName];
		const {api} = defineJs;

		const item = api.find(apiInfo => {
			const {api, title, url} = apiInfo;

			// If found, save it to result and break
			if (typeStr === api || typeStr === title || typeStr === url) {
				result = apiInfo;
				return true;
			}
		});

		// If found, break
		if (!!item) return true;
	});

	return result;
};

module.exports = fn;
