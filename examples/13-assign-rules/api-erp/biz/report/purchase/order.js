
const fn = async (query) => {
	const formResult = await global.api.do('forms:/bill/form/crud?formname=trader', query);
	return {
		billid: query.billid,
		formname: formResult.formname,
	};
};

module.exports = fn;
