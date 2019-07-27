
const options = {
	public: {
		name: '/',
		path: './www',
	}
};

// So simple!
const server = require('../../noapi')(options);

// Exports the http server for testing via supertest
module.exports = server;
