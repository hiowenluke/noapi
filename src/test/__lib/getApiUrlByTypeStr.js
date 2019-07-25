
const data = require('../../data');

// types:
// 		'/bill/form/crud', // by api
// 		'Bill - Form - Crud', // by title
// 		'http://localhost:3000/bill/form/crud?formname=trader', // by url

/** @name lib.getApiUrlByTypeStr */
const fn = (typeStr) => {

	// If the typeStr is a url, return it directly
	if (/^http[s]*:/i.test(typeStr)) { // url
		return typeStr;
	}

	let apiUrl;

	data.sysNames.find(sysName => {
		const defineJs = data.defineJs[sysName];
		const {api} = defineJs;

		const item = api.find(apiInfo => {
			const {api, title, url} = apiInfo;

			if (typeStr === api || typeStr === title) {
				apiUrl = url;
				return true;
			}
		});

		if (!!item) return true;
	});

	return apiUrl;
};

module.exports = fn;
