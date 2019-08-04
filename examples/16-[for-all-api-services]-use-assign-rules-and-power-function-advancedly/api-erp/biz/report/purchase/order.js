
const fn = async (query) => {
	const formResult = await global.api.do('forms:/bill/form/crud?formName=trader', query);
	return {

		// The str property is attached in power function in web service
		str: query.str,
		billid: query.billid,
		formresult: formResult,
	};
};

module.exports = fn;
