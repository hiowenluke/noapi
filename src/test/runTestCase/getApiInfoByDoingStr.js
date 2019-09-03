
const data = require('../../data');

// types:
// 		'/bill/form/crud', // by api
// 		'Bill - Form - Crud', // by title
// 		'http://localhost:3000/bill/form/crud?formname=trader', // by url

const fn = (doingStr) => {
	let result;

	data.sysNames.find(sysName => {
		const defineJs = data.defineJs[sysName];
		const {api} = defineJs;

		const item = api.find(apiInfo => {
			const {api, title, url} = apiInfo;

			// If found, save it to result and break
			if (doingStr === api || doingStr === title || doingStr === url) {
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
