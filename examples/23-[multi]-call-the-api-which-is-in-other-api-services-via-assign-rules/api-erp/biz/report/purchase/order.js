
const fn = async (query) => {
	const formResult = await global.api.do('forms:/bill/form/crud?formName=trader', query);
	return {
		billid: query.billid,
		formName: formResult.formName,
	};
};

module.exports = fn;
