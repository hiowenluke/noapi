
const kdo = require('kdo');
const callApi = require('./callApi');
const data = require('../data');
const lib = require('../__lib');

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
	},

	initQuery({req}) {

		// Merge req.query and req.body to query
		let query = Object.assign(req.body, req.query);

		// Save query to this.args to pass it to the next functions for kdo
		this.setArgs({query});
	},

    attachOriginalUrlToQuery({req, query}) {
        query.originalUrl = req.originalUrl;
    },

	async do({res, query, next}) {
		const result = await callApi(query);

		if (result && typeof result === 'object' && result.error) {
			let error = result.error;

			if (error === 404) {
				return next();
			}

			if (!data.serverOptions.isSilence) {
				error = lib.removeRedundantTabs(error);
				console.log(error);
			}

			res.send({success: false, error: error});
		}
		else {
			res.send({success: true, data: result});
		}
	}
};

/** @name me.routes */
const fn = async (req, res, next) => {
	try {
		await kdo.do(flow, {req, res, next});
	}
	catch(e) {
		console.log(e);
		res.send({success: false, error: e.toString()});
	}
};

module.exports = fn;
