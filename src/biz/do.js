
const data = require('../data');
const lib = require('../__lib');

// Convenient api quick calls to its biz method
// 		complete: 		data.core.do.basic.say.hi(query)
// 		Shorthand: 		noapi.biz(query)
const fn = async (query) => {

	const api = query.originalUrl.split('?')[0];
	const sysBizs = data.core.biz;
	const sysBizFn = lib.getSysApiFn(api, sysBizs);

	if (typeof sysBizFn !== 'function') {
		return {error: `The handler ./biz${api}.js does not exists.`};
	}

	// Automatically parse json string if needed
	if (data.queryOptions.isParseJsonStr) {
		const allKeys = Object.keys(query);

		// Remove keys created by noapi
		const ignoreKeys = ['__', 'originalUrl'];
		const keys = allKeys.filter(item => ignoreKeys.indexOf(item) === -1);

		keys.forEach(key => {
			const o = lib.tryParseJsonStr.do(query[key]);
			if (o) {
				query[key] = o;
			}
		});
	}

	// If there is no params, or just only one parameter named "query", pass the whole query
	const params = data.bizParams[api];
	if (!params || params.length === 1 && params[0] === 'query') {
		return await sysBizFn(query);
	}
	else {
		// Otherwise, pass query[paramName]
		const args = params.map(paramName => query[paramName]);
		return await sysBizFn(...args);
	}
};

module.exports = fn;
