
const noapi = require('../noapi');

const options = {

	// The custom function to handle query
	power(query, req, res) {

		// Since the database field names are usually not case sensitive,
		// we can add lowercase to the parameters of the query, e.g.:
		//		query.formName => query.formname
		noapi.params.attachLowerCase(query);
	}
};

// So simple!
const server = noapi(options);

// Exports the http server for testing via supertest
module.exports = server;
