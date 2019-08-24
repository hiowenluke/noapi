
const fn = async (query) => {
	if (query.formName === 'abc') {
		return {
			str: query.str,
			msg: 'do something for form abc by api-forms'
		};
	}

	return {
		str: query.str,
		formName: query.formName,
	};
};

module.exports = fn;
