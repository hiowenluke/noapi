
/** @name lib.getApiServiceNameFromPath */
const fn = (path) => {
	const temp = path.split('/');
	return temp[temp.length - 1];
};

module.exports = fn;
