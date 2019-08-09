
/** @name lib.getMaxId */
const fn = (data) => {
	return Math.max.apply(Math, data.map((item) => item.id));
};

module.exports = fn;
