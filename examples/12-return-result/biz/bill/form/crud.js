
const fn = async (query) => {
	if (query.formname !== 'employee') {
		return {error: 'The formname must be employee'};
	}
	else {
		return {formname: query.formname};
	}
};

module.exports = fn;
