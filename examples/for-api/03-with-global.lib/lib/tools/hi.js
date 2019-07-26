
/** @name lib.tools.hi */
const fn = async () => {
	await global.lib.wait(10);
	console.log('hi');
};

module.exports = fn;
