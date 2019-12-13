
const parse  = require('url').parse;

const parseFromUrl = (url) => {
	let query = parse(url,true).query;
	let errArg = '';

	try {
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

	getByUrl(url) {
		if (!this.data[url]) {
			const query = parseFromUrl(url);
			if (query.error) {
				return query;
			}

			this.data[url] = query;
		}

		return this.data[url];
	}
};

module.exports = me;
