
const path = require('path');

/** @name me.data */
const me = {
	webServiceRoot: '', // The root path of web service

	serverOptions: {
		name: 'default',
		port: 3000,
		public: './public',
		isSilence: false, // Do not print logs if it is true
	},

	core: {}, // {api, biz}
	bizParams: {}, // {"/say/hi": ["name", "age"]}

	queryOptions: {
		isParseJsonStr: true, // If the value of query parameter is json str, then convert it to object
	},

	global: {}, // {api, biz}

	init(pathToCaller, options = {}) {
		this.webServiceRoot = path.resolve(pathToCaller, '..');

		Object.assign(this.serverOptions, options);
		Object.assign(this.queryOptions, options.queryOptions, options.query);
	},
};

module.exports = me;
