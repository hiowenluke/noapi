
const options = {

	// 	Transfer some requests to other api services.
	//
	// 	E.g:
	//
	// 	When client accessing "forms:/info/form/new", the forms subsystem will pass it to "kind:/form/new" first.
	// 	If the kind subsystem returns a result, then the forms subsystem will sent it to the client as the final result.
	// 	If the kind subsystem returns nothing, then the forms subsystem continues processing.

	assignRules: [
		['erp:/report/purchase/order', 'forms:/bill/form/crud'],
	]
};

// So simple!
const server = require('../../..')(options);

// Exports the http server for testing via supertest
module.exports = server;
