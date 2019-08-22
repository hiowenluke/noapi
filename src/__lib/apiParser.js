
/** @name lib.apiParser */
const me = {

	// "/bill/form/crud" => {bill: {form: crud: {}}}
	parseApiPathToObject(apiPath) {
	// {bill: {form: {crud: {}}}} => "/bill/form/crud"
	objectToApiPaths(obj, path = '', arr = []) {
		Object.keys(obj).forEach(key => {
			const o = obj[key];
			const subPath = path + '/' + key;

			if (Object.keys(o).length === 0) {
				arr.push(subPath);
			}
			else {
				if (typeof o === 'object') {
					me.objectToApiPaths(o, subPath, arr);
				}
			}
		});

		return arr;
	},

		const obj = {};
		let parent = obj;

		const nodes = apiPath.split('/'); // ['', 'bill', 'form', 'crud']
		while (nodes.length) {
			const node = nodes.shift();
			if (node === '') continue;

			parent[node] = {};
			parent = parent[node];
		}

		return obj;
	},


	// Parse api url:
	// 		1. If the request comes from web, then the url is like below:
	// 	  	   /forms:/bill/dropDownList?formname=purchaseOrder&listname=trader

	// 		2. If the request comes from api, then the url is like below:
	// 	  	   forms:/bill/dropDownList
	parseApiUrlToSysNameAndApiPath(apiUrl) {

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
	}
};

module.exports = me;
