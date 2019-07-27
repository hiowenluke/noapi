
/** @name lib.convertParamsToKeyValues */
const fn = (params) => {
	const keys = Object.keys(params);
	const str = keys.map(key => key + '=' + params[key]).join(', ');
	return str;
};

module.exports = fn;
