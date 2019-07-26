
/** @name lib.wait */
const fn = (ms) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

module.exports = fn;
