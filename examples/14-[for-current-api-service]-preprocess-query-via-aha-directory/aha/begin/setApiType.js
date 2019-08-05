
const noapi = require('../../../noapi');

const fn = ({query}) => {

	// Use noapi lib to check if it is a assigned path
	query.isBill = noapi.url.isStartWith(query, '/bill');
	query.isInfo = noapi.url.isStartWith(query, '/info');
};

module.exports = fn;