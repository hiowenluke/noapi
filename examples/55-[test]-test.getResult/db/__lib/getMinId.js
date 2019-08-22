
/** @name lib.getMinId */
const fn = (data) => {
	return Math.min.apply(Math, data.map((item) => item.id));
};

module.exports = fn;
