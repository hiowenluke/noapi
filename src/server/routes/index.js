
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

	let result;

	try {
		result = await bizDo(api, query);

		if (result && result.error) {
			const errMsg = result.error;

			if (!config.isSilence) {
				console.log(errMsg);
			}

			result = {error: errMsg};
		}
	}
	catch(e) {
		console.log(e);
		result = {error: e.toString()};
	}

	return result;
};

module.exports = fn;
