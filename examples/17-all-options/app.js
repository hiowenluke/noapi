
const options = {

	// See terminal logs for more details
	serverName: 'MyApi',
	host: 'localhost',
	port: '9000',

	// -------------------------------------------
	// Show some tips in terminal if needed after started
	prompt: {
		tips: `
			---------------------------------
			Show some tips if needed.
				indent line
			---------------------------------
		`,
		isKeepIndentation: false,
	},

	// The default value of options.prompt.isKeepIndentation is false.
	// If we omit it, then the demo options.prompt above is equivalents to below:
	// 		prompt: `
	// 			---------------------------------
	// 			Show some tips if needed.
	// 			---------------------------------
	// 		`,

	// -------------------------------------------

	// See "15-public-folder" and "16-set-public-folder" for more details
	public: './web',

	// See "23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules" for more details
	assignRules: [],

	// See "25-[multi]-[for-all-api-services]-preprocess-query-via-power-function" for more details
	power() {},

	// Options for query object
	query: {

		// By default, if the value of query parameter is json str, it will be converted to object,
		// see "10-get-url-parameters-via-query" and "11-get-url-parameters-via-name" for form details.

		// You can close this feature via set the below option as false.
		isParseJsonStr: false,
	},
};

// So simple!
const server = require('../noapi')(options);

// Exports the http server for automatically testing via supertest
module.exports = server;
