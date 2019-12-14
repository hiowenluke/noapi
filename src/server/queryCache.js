
const qs = require('qs');

const parseQueryStr = (queryStr) => {

	// Simulate a complete url so that we can use url.parse to parse it
	// const url = '/?' + queryStr;
	// let query = parse(url, true).query;

	let query;

	try {
		query = qs.parse(queryStr);
	}
	catch(e) {
		query = {error: `The data sent to the server contains an illegal json string.`}
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
