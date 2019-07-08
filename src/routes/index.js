
const kdo = require('kdo');
const me = kdo.obj(module);
const urlencode = require('urlencode');

let power;

const flow = {
	validateOriginalUrl({req, res}) {

		// An api url must be start with "/xxx:/"
		if (!/^\/[a-zA-Z0-9_]+?:\//.test(req.originalUrl)) return res.end();
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
		if (power) {
			const newQuery = power(query, req, res);
			this.setArgs({query: newQuery || query});
		}
	},

    attachOriginalUrlToQuery({req, query}) {
        let originalUrl = req.originalUrl;
        originalUrl = urlencode.decode(originalUrl);
        query.originalUrl = originalUrl;
    },

	async do({res, query}) {
		const result = await me.callApi(query);

		if (result && typeof result === 'object' && result.error) {
			res.send({success: false, error: result.error});
		}
		else {
			res.send({success: true, data: result});
		}
	}
};

const handler = async (req, res) => {
	try {
		await kdo.do(flow, {req, res});
	}
	catch(e) {
		console.log(e);
		res.send({success: false, error: e.toString()});
	}
};

const fn = (expressApp, power_) => {

	// Save customer handler
	power = power_;

	// All requests, what ever get or post，be sent to handler
	expressApp.get('*', handler);
	expressApp.post('*', handler);

	// Init core modules
	me.aha.init();
	me.api.init();
	me.biz.init();
};

module.exports = fn;
