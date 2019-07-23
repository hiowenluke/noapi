
const fn = async (query) => {
	let requestTime = query.isReturnRequestTime ? new Date().getTime() : null;
	return {formname: query.formname, requestTime};
};

module.exports = fn;
