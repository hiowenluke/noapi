
const data = require('../data');
const lib = require('../__lib');

/** @name me.callApi */
const fn = async (query) => {
	if (!data.core) {
		return {error: 'Invalid api'};
	}

	const api = query.originalUrl.split('?')[0];
	const sysApis = data.core.api;
	const sysApiFn = lib.getSysApiFn(api, sysApis);

	if (!sysApiFn) {
		return {error: 404};
	}

	const result = await sysApiFn(query);
	return result;
};

module.exports = fn;
