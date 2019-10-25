
const fn = async (formName) => {
	if (formName !== 'employee') {
		return {error: 'The formName must be employee'};
	}
	else {
		return {formName};
	}
};

module.exports = fn;
