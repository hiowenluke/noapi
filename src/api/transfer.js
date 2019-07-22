
const callApi = require('../callApi');
const queryString = require('querystring');

// Call another api in the form of route forwarding, for example:
// await global.api.do('forms:/info/dropdownlist', query);
const fn = async (apiPath, query) => {

	// Save the apiPath as query.originalUrl, which is important
	query.originalUrl = apiPath;

	// Append the url parameter in apiPath to the query.
	// For example, "kind:/dropdownlist?kindname=traderlevel status" with parameter "kindname"
	const paramsStr = apiPath.split('?')[1];

	// If there is a url parameter (eg "kindname=traderlevel")
	if (paramsStr) {

		// Convert the url parameter to an object
		const params = queryString.parse(paramsStr);

		// Append to query.
		// Note that this overrides the original parameter of the same name in the query,
		// but this is reasonable, following the principle of "explicit precedence over implied"
		// (as the current property overrides the property on __proto__)
		Object.assign(query, params);
	}

	const result = await callApi(query, true);
	return result;
};

module.exports = fn;
