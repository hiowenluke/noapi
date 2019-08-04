
const fn = async (query) => {
	if (query.formname === 'abc') {
		return {msg: 'do something for form abc by api-forms'};
	}

	return {formname: query.formname};
};

module.exports = fn;
