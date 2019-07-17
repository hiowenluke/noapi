
const fn = async (query) => {
	let requestTime = query.isReturnRequestTime ? new Date().getTime() : null;
	return {formName: query.formname, requestTime};
};

module.exports = fn;
