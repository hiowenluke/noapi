
const callApi = require('../routes/callApi');
const queryString = require('querystring');

// Call another api in the form of route forwarding, for example:
// await global.api.do('forms:/info/dropdownlist', query);
const fn = async (api, query) => {

	// Save the api as query.originalUrl, which is important
	query.originalUrl = api;

	// Append the url parameter in api to the query.
	// For example, "kind:/dropdownlist?kindname=traderlevel status" with parameter "kindname"
	const paramsStr = api.split('?')[1];

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
