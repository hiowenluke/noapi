
const noapi = require('../../../../noapi');
const flow = require('./flow');

const fn = (query, req, res) => {

	// Since the database field names are usually not case sensitive,
	// we can add lowercase to the parameters of the query, e.g.:
	//		query.formName => query.formName
	noapi.params.attachLowerCase(query);

	// Continue processing the query, which is valid for all api services.
	flow(query);
};

module.exports = fn;
