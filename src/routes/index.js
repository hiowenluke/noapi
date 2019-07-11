
const kdo = require('kdo');
const me = kdo.obj(module);
const urlencode = require('urlencode');
const init = require('./init');

let power;

const flow = {
	validateOriginalUrl({req, res}) {
		const originalUrl = req.originalUrl;

		// "/default:/favicon.ico"
		if (/\.ico$/.test(originalUrl)) {
			return 'break';
		}

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

// options: {power, apiPath, module}
const fn = (expressApp, options = {}) => {

	// Initializing for routes
	init(options);

	// Save customer handler
	power = options.power;

	// All requests, what ever get or post, be sent to handler
	expressApp.get('*', handler);
	expressApp.post('*', handler);

	// Load Api Services from directories such "api", "api-forms"
	me.loadApiServices();

	// Init core modules
	me.aha.init();
	me.api.init();
	me.biz.init();
};

module.exports = fn;
