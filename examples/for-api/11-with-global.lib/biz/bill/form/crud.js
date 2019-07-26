
const fn = async (query) => {
	await global.lib.tools.hi();

	return {formname: query.formname};
};

module.exports = fn;
