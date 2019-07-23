
// Parse url

// 1. If the request comes from web, then the url is like below:
// 	  /forms:/bill/dropDownList?formname=purchaseOrder&listname=trader

// 2. If the request comes from api, then the url is like below:
// 	  forms:/bill/dropDownList

/** @name lib.parseApiUrl */
const fn = (apiUrl) => {

	// apiPath = "/forms:/bill/dropDownList"
	let apiPath = apiUrl.split('?')[0];

	const temp = apiPath.split(':'); // '/forms:/info/dropdownlist'
	const sysName = temp[0].replace("/", ''); // 'forms'
	apiPath = temp[1]; // '/info/dropdownlist'

	return {sysName, apiPath};
};

module.exports = fn;
