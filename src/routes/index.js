
const callApi = require('./callApi');
const data = require('../data');
const lib = require('../__lib');

/** @name me.routes */
const fn = async (req, res, next) => {
	try {
		// ".../favicon.ico"
		if (/\.ico$/.test(req.originalUrl)) {
			return next();
		}

		let originalUrl = req.originalUrl;

		// The url must be encoded by encodeURI()
		originalUrl = decodeURI(originalUrl);
		req.originalUrl = originalUrl;

		// Merge req.query and req.body to query
		let query = Object.assign(req.body, req.query);
		query.originalUrl = req.originalUrl;

		const result = await callApi(query);
		if (result && typeof result === 'object' && result.error) {
			let error = result.error;

			// Pass the 404 error to next middleware
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
	catch(e) {
		console.log(e);
		res.send({success: false, error: e.toString()});
	}
};

module.exports = fn;
