
const fn = async (formName) => {
	if (formName === 'abc') {
		return {msg: 'do something for form abc by api-forms'};
	}

	return {formName};
};

module.exports = fn;
