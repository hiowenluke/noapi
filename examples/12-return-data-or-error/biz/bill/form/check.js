
const fn = async (billid, act) => {
	return {
		billid,
		checked: act === 'check' ? true : act === 'uncheck' ? false : 'unknown',
	};
};

module.exports = fn;
