
const options = {
	assignRules: [
		['erp:/report/purchase/order', 'forms:/bill/form/crud']
	]
};

// So simple!
const server = require('../../noapi')(options);

// Exports the http server for testing via supertest
module.exports = server;
