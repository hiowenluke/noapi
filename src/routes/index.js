
const kdo = require('kdo');
const me = kdo.obj(module);
const urlencode = require('urlencode');
const init = require('./init');
const app = require('../web/app');

let power;

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
		originalUrl = urlencode.decode(originalUrl);
		req.originalUrl = originalUrl;

		console.log('originalUrl', originalUrl);

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
        query.originalUrl = req.originalUrl;
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

const noapiRouter = async (req, res) => {
	try {
		await kdo.do(flow, {req, res});
	}
	catch(e) {
		console.log(e);
		res.send({success: false, error: e.toString()});
	}
};

// options: {power, apiPath, module}
const fn = (options = {}) => {
	power = options.power;

	// Wrap options as {options} for kdo
	init({options});
	app.saveNoapiRouter(noapiRouter);

	// Init core modules
	me.aha.init();
	me.api.init();
	me.biz.init();
};

module.exports = fn;
