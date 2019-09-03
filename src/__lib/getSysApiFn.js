
const tryToGetKey = (sysApis, pp) => {
	const keys = Object.keys(sysApis);
	const key = keys.find(key => key.toLowerCase() === pp);
	return key;
};

// Find the corresponding api from sysApis based on pathNodes
// ['info', 'dropdownlist'] => .info.dropdownlist
const getSysApiByApiPath = (pathNodes, sysApis) => {
	let sysApi;

	// ['info', 'dropdownlist']
	if (pathNodes.length) {
		const p = pathNodes.shift(); // p = 'info', pathNodes = ['dropdownlist']

		// Because the name of the api is a camel name (such as dropDownList),
		// and the string in path may be all lowercase (such as dropdownlist),
		// we need to convert to lowercase and then look up to make dropdownlist match dropDownList.
		const pp = p.toLowerCase();

		// Try looking for keys in sysApis and sysApis.__proto__.
		// Because sysApis has the following condition, the property dropDownList is in __proto__ :
		// 		bom: {
		//			isIndexJs: true
		//			__proto__: {
		//				dropDownList: f()
		//			}
		// 		}
		const key = tryToGetKey(sysApis, pp) || tryToGetKey(sysApis.__proto__, pp);
		if (!key) return;

		// Continue to find the next level of path
		sysApi = getSysApiByApiPath(pathNodes, sysApis[key]);
	}
	else {
		sysApi = sysApis;
	}

	return sysApi;
};

// -------------------------------------------------------
// Get api function based on sysName, api, sysApis
// -------------------------------------------------------
// Input:
// 		sysName = "forms"
// 		api = "/bill/dropdownlist"
// 		sysApis = data.core.forms.api

// Output:
//		data.core.forms.api.bill.dropDownList
// -------------------------------------------------------
// Notice:
// 		The "dropdownlist" in api is lowercase and can also match to "dropDownList"
// -------------------------------------------------------

/** @name lib.getSysApiFn */
const fn = (sysName, api, sysApis) => {

	// "/info/dropdownlist/" => ['info', 'dropdownlist']
	const apiPathNodes = api.replace(/(^\/)|(\/$)/g, '').split('/');

	// ['info', 'dropdownlist'] => .info.dropdownlist;
	const sysApi = getSysApiByApiPath(apiPathNodes, sysApis);
	return sysApi;
};

module.exports = fn;
