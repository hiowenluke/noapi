
const noapi = require('../../../noapi');

const fn = ({query}) => {

	// Use noapi lib to check if it is a assigned path
	query.isbill = noapi.url.isStartWith(query, '/bill');
	query.isinfo = noapi.url.isStartWith(query, '/info');
};

module.exports = fn;
