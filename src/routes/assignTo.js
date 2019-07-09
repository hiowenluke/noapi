/*
	Transfer some requests from the current subsystem to other systems.

	E.g:

	When client accessing "forms:/info/form/new", the forms subsystem will pass it to "kind:/form/new" first.
	If the kind subsystem returns a result, then the forms subsystem will sent it to the client as the final result.
	If the kind subsystem returns nothing, then the forms subsystem continues processing.

* */

const data = require('../data');

// -------------------------------------------------------
// Get toApiPath according to the rules
// Input:
// 		['forms:/info/form/new', 'kind:/form/new']
// 		['forms:/info/*', 'kind:/*']
// Output:
//		'kind:/form/new'
//		'kind:/*'
// -------------------------------------------------------
const getToApiPath = (sysName, rule, query) => {

	let url = query.originalUrl; // /forms:/info/form/new?formname=trader
	let fromApiPath = rule[0]; // forms:/info/form/new
	let toApiPath = rule[1]; // kind:/form/new
	let isAnyFrom;


	// -------------------------------------------------------
	// Fix url
	// -------------------------------------------------------

	// Note that url starts with "/"
	// /forms:/info/form/new?formname=trader => /forms:/info/form/new
	url = url.split('?')[0];

	// If url does not start with /xxx:, it is automatically filled with sysName
	if (url.indexOf(':') === -1) {
		url = `/${sysName}:` + url; // /forms:/info/form/new
	}

	// -------------------------------------------------------
	// Fix fromApiPath
	// -------------------------------------------------------

	// Since url starts with "/", fromApiPath also needs to be like this
	if (fromApiPath.substr(0, 1) !== '/') {
		fromApiPath = '/' + fromApiPath; // /forms:/info/form/new
	}

	// Whether fromApiPath uses the wildcard "*"
	isAnyFrom = /\*$/.test(fromApiPath);

	// If fromApiPath uses the wildcard "*", then
	// remove the "*" at the end (because it is matched from scratch)
	if (isAnyFrom) {
		fromApiPath = fromApiPath.replace(/\*$/, '');
	}


	// -------------------------------------------------------
	// Break if url is not start with fromApiPath
	// -------------------------------------------------------

	// According to fromApiPath, set the reg regular expression rule.
	// Note that ^ is added to indicate matching from the beginning.
	const reg = new RegExp('^' + fromApiPath, 'i'); // reg = /^\/forms:\/info\/form\/new/i

	// If url does not start with fromApiPath, then break
	if (!reg.test(url)) return;


	// -------------------------------------------------------
	// If fromApiPath does use the wildcard "*", then do something
	// -------------------------------------------------------

	if (isAnyFrom) {

		// If toApiPath uses the wildcard "*", then some processing is done on toApiPath
		if (/\*$/.test(toApiPath)) {
			toApiPath = toApiPath.replace(/\*$/, ''); // Remove the "*" at the end of toApiPath

			// "/forms:/info/form/new".replace("/forms:/info/", "kind:/") => "kind:/form/new"
			toApiPath = url.replace(fromApiPath, toApiPath); // Convert url to toApiPath
		}
		else {
			// If toApiPath does not use the wildcard "*", then any fromApiPath is passed to
			// the specified toApiPath handler (eg ['forms:/info/form/*', 'sys:/validate']),
			// so there is no need to do anything with toApiPath here.
		}

	}

	return toApiPath;
};

const getRulesFromSysName = (rulesFromApiPath) => {
	const result = rulesFromApiPath.match(/^([a-zA-Z0-9_])+(?=:)/);
	return result ? result[0] : ''; // 'forms:/info/*' => 'forms'
};

const tryToGetResult = async (apiPath, query) => {

	if (!apiPath) return;

	// Since other subsystems maybe modify the value of query, a copy of query is passed here
	const q = Object.create(query);
	const result = await global.api.do(apiPath, q);

	// If a valid value (object or array) is returned, it is used directly
	if (result && typeof result === 'object') return result;
};

// Transfer some requests from the current subsystem to other subsystems
const fn = async (query) => {

	// The assign rule array:
	// 		[
	// 			['forms:/info/*', 'kind:/*'],
	//			['forms:/info/form/new', 'kind:/form/new'],
	//			['forms:/bill/dropDownList', 'kind:/dropDownList'],
	// 		]
	const assignRules = data.assignRules;
	if (!assignRules || !assignRules.length) return;

	// The name of the current subsystem, such as "forms"
	const sysName = query.__.sysName;

	for (let i = 0; i < assignRules.length; i ++) {
		const assignRule = assignRules[i]; // ['forms:/info/*', 'kind:/*']
		const rulesFromSysName = getRulesFromSysName(assignRule[0]); // "forms"
		if (rulesFromSysName !== sysName) continue;

		const apiPath = getToApiPath(sysName, assignRule, query);
		const result = await tryToGetResult(apiPath, query);
		if (result) return result;
	}
};

module.exports = fn;
