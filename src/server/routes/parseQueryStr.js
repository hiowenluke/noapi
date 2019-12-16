
const url  = require('url');
const qs = require('qs');

const parseQueryStr = (str) => {
	let query;
	let errArg;
	let isComplexQueryStr;

	try {
		// From post
		// name=owen&obj%5Bdate%5D=2019-05-01&arr%5B0%5D=1&arr%5B1%5D=abc&arr%5B2%5D%5Btel%5D=12345678
		if (/(^|&).+?\b((%5B)|(\[))/.test(str)) {
			isComplexQueryStr = 1;
			query = qs.parse(str);
		}
		else {
			// From get
			// name=owen&obj={%22date%22:%222019-05-01%22}&arr=[1,%22abc%22,{%22tel%22:12345678}]

			// Simulate a complete url-string so that we can use url.parse() to parse it
			query = url.parse('/?' + str, true).query;

			const keys = Object.keys(query);
			keys.forEach(key => {
				const val = query[key];
				if (!/[[{]/.test(val)) return;

				errArg = key;

				// Processes only standard json strings, regardless of object.
				query[key] = JSON.parse(val);
			});
		}
	}
	catch(e) {
		console.log(e);

		if (isComplexQueryStr) {
			query = {error: `${str} has invalid json string.`}
		}
		else {
			query = {error: `${errArg} is an invalid json string.`}
		}
	}

	return query;
};


const me = {
	cache: {},

	do(queryStr) {
		if (!queryStr) {
			return {};
		}

		if (!this.cache[queryStr]) {
			const query = parseQueryStr(queryStr);
			if (query && query.error) {
				return query;
			}

			// ECMAScript 2016 (ed. 7) established a maximum length of 2^53 - 1 elements
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
			this.cache[queryStr] = query;
		}

		return this.cache[queryStr];
	},
};

module.exports = me;
