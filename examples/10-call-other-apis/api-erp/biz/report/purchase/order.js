
const fn = async (query) => {
	const result = await global.api.do('forms:/bill/form/crud?formname=trader', query);
	return result;
};

module.exports = fn;
