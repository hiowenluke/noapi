
const tryToGetKey = (sysApis, pp) => {
	const keys = Object.keys(sysApis);
	const key = keys.find(key => key.toLowerCase() === pp);
	return key;
};

// Find the corresponding api from sysApis based on pathNodes
// ['say', 'hi'] => .say.hi
const getSysApiByApiPath = (pathNodes, sysApis) => {
	let sysApi;

	// ['say', 'hi']
	if (pathNodes.length) {
		const p = pathNodes.shift(); // p = 'say', pathNodes = ['hi']

		// Because the name of the api is a camel name (such as "dropDownList"),
		// and the string in path may be all lowercase (such as "dropdownlist"),
		// we need to convert to lowercase and then look up to make "dropdownlist" match "dropDownList".
		const pp = p.toLowerCase();

		// Try looking for keys in sysApis and sysApis.__proto__.
		// Because sysApis has the following condition, the property dropDownList is in __proto__ :
		// 		bom: {
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
// Get api function based on api, sysApis
// -------------------------------------------------------
// Input:
// 		api = "/say/hi"
// 		sysApis = data.core.api

// Output:
//		data.core.api.say.hi
// -------------------------------------------------------
// Notice:
// 		The "hi" in api is lowercase and can also match to "HI" or "Hi" or "hI"
// -------------------------------------------------------

/** @name lib.getSysApiFn */
const fn = (api, sysApis) => {

	// "/say/hi" => ['say', 'hi']
	const apiPathNodes = api.replace(/(^\/)|(\/$)/g, '').split('/');

	// ['say', 'hi'] => .say.hi;
	const sysApi = getSysApiByApiPath(apiPathNodes, sysApis);
	return sysApi;
};

module.exports = fn;
