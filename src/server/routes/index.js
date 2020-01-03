
const config = require('../../config');
const data = require('../../data');
const bizDo = require('../../biz/do');
const parseQueryStr = require('./parseQueryStr');

const fn = async (api, queryStr) => {

	const isApiExists = data.apis.indexOf(api) >= 0;
	if (!isApiExists) {
		return {error: `${api} not found`};
	}

	const query = parseQueryStr.do(queryStr);
	if (query && query.error) {
		return query;
	}

	const result = await bizDo(api, query);
	return result;
};

module.exports = fn;
