
const fn = async (query) => {

	// The parameter in url is formName, the power() attached a lowercase of it to query.
	return {formname: query.formname};
};

module.exports = fn;
