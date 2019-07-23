
// Parse api url (without host and port such as http://localhost:3000)

// 1. If the request comes from web, then the url is like below:
// 	  /forms:/bill/dropDownList?formname=purchaseOrder&listname=trader

// 2. If the request comes from api, then the url is like below:
// 	  forms:/bill/dropDownList

/** @name lib.parseApiUrlToSysNameAndApiPath */
const fn = (apiUrl) => {

	// apiPath = "/forms:/bill/dropDownList"
	let apiPath = apiUrl.split('?')[0];
	let sysName;

	if (apiPath.indexOf(':') === -1) { // "/bill/dropDownList" without "/forms:"
		sysName = 'default';
	}
	else {
		const temp = apiPath.split(':'); // '/forms:/info/dropdownlist'
		sysName = temp[0].replace("/", ''); // 'forms'
		apiPath = temp[1]; // '/info/dropdownlist'
	}

	return {sysName, apiPath};
};

module.exports = fn;
