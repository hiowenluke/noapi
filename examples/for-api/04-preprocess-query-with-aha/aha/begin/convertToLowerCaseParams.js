
const noapi = require('../../../noapi');

const fn = ({query}) => {

	// Use noapi lib to convert params to lowercase
	noapi.params.convertToLowerCase(query);
};

module.exports = fn;
