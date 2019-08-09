
const fn = async (query) => {

	// Use global.api.do() to call the api which is in other api services.
	// See "18-use-noapi.do-instead-of-global.api.do-to-improve-performance" to learn more.
	const formResult = await global.api.do('forms:/bill/form/crud?formname=trader', query);

	return {
		billid: query.billid,
		formname: formResult.formname,
	};
};

module.exports = fn;
