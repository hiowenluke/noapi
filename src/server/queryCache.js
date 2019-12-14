
const parse  = require('url').parse;

const parseQueryStr = (queryStr) => {

	// Simulate a complete url so that we can use url.parse to parse it
	const url = '/?' + queryStr;
	let query = parse(url, true).query;

	let errArg = '';

	try {
		// Convert the json string in query to object
		const keys = Object.keys(query);
		keys.forEach(key => {
			const val = query[key];
			if (!/[[{]/.test(val)) return;

			errArg = key;

			// Processes only standard json strings, regardless of object.
			query[key] = JSON.parse(val);
		});
	}
	catch(e) {
		query = {error: `${errArg} is not a standard json string.`}
	}

	return query;
};


const me = {
	data: {},

	get(queryStr) {
		if (!this.data[queryStr]) {
			const query = parseQueryStr(queryStr);
			if (query.error) {
				return query;
			}

			// ECMAScript 2016 (ed. 7) established a maximum length of 2^53 - 1 elements
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
			this.data[queryStr] = query;
		}

		return this.data[queryStr];
	},
};

module.exports = me;
