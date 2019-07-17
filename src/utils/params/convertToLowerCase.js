
const attachLowerCase = require('./attachLowerCase');

// Convert all parameters in query to lower case:
//		query.formName => query.formname

/** @name noapi.params.convertToLowerCase */
const fn = async (query) => {
	return attachLowerCase(query, true);
};

module.exports = fn;
