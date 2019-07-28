
const fn = async (query) => {
	return {
		billid: query.billid,
		checked: query.act === 'check' ? true : query.act === 'uncheck' ? false : 'unknown',
	};
};

module.exports = fn;
