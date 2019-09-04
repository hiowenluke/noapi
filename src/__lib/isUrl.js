
/** @name lib.isUrl */
const fn = (str) => {
	return /^http(s*):\/\//i.test(str);
};

module.exports = fn;
