
const fn = async (query) => {
	if (query.formname === 'abc') {
		return {
			str: query.str,
			msg: 'do something for form abc by api-forms'
		};
	}

	return {
		str: query.str,
		formname: query.formname,
	};
};

module.exports = fn;
