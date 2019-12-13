
const paramsCache = require('./paramsCache');
const data = require('../data');
const keyPaths = require('keypaths');

const fn = async (api, query) => {

	const isApiExists = data.apis.indexOf(api) >= 0;
	if (!isApiExists) {
		if (api === '/') {
			return 'Welcome to Noapi!';
		}
		else {
			return {error: `${api} not found`};
		}
	}

	const apiX = data.apisX[api]; // "/say/hi" => "say.hi"
	const func = keyPaths.get(data.handlers, apiX); // say.hi()

	if (typeof func !== 'function') {
		return {error: `The handler ./biz${api}.js does not exists.`};
	}

	const names = paramsCache.getByApi(api);
	const args = names.map(name => query[name]);

	const result = await func(...args);
	return result;
};

module.exports = fn;
