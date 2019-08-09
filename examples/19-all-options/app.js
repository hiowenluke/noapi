
const options = {

	// See terminal logs for more details
	serverName: 'MyApi',
	http: 'localhost',
	port: '9000',

	// See "08-public" for more details
	public: 'web',

	// See "14-call-the-api-which-is-in-other-api-services-via-assign-rules" for more details
	assignRules: [],

	// See "16-[for-all-api-services]-preprocess-query-via-power-function" for more details
	power() {},
};

// So simple!
const server = require('../..')(options);

// Exports the http server for testing via supertest
module.exports = server;
