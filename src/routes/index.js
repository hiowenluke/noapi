
const kdo = require('kdo');
const callApi = require('./callApi');
const data = require('../data');

const flow = {
	validateUrl({req}) {

		// ".../favicon.ico"
		if (/\.ico$/.test(req.originalUrl)) {

			// Use the break flag to let kdo terminate execution.
			return 'break';
		}
	},

	initOriginalUrl({req}) {
		let originalUrl = req.originalUrl;

		// The url must be encoded by encodeURI()
		originalUrl = decodeURI(originalUrl);
		req.originalUrl = originalUrl;

		// If the url is not start with "/xxx:", then set with "/default:"
		if (!/^\/[a-zA-Z0-9_]+?:\//.test(originalUrl)) {
			req.originalUrl = '/default:' + originalUrl;
		}
	},

	initQuery({req}) {

		// Merge req.query and req.body to query
		let query = Object.assign(req.body, req.query);

		// Create a private data namespace for noapi
		query.__ = {};

		// Save query to this.args to pass it to the next functions for kdo
		this.setArgs({query});
	},

	applyPowerFunctionForQuery({req, res, query}) {
		if (data.power) {
			const newQuery = data.power(query, req, res);
			this.setArgs({query: newQuery || query});
		}
	},

    attachOriginalUrlToQuery({req, query}) {
        query.originalUrl = req.originalUrl;
    },

	async do({res, query}) {
		const result = await callApi(query);

		if (result && typeof result === 'object' && result.error) {
			res.send({success: false, error: result.error});
		}
		else {
			res.send({success: true, data: result});
		}
	}
};

/** @name me.routes */
const fn = async (req, res) => {
	try {
		await kdo.do(flow, {req, res});
	}
	catch(e) {
		console.log(e);
		res.send({success: false, error: e.toString()});
	}
};

module.exports = fn;
