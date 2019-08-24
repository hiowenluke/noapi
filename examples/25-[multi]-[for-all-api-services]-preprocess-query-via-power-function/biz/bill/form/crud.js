
const fn = async (query) => {

	// The parameter in url is formName, the power() in app.js
	// attached a lowercase of it as query.formname.
	return {formName: query.formname};
};

module.exports = fn;
