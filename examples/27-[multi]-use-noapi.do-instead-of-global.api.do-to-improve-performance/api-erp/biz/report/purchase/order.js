
// const noapi = require('noapi');
const noapi = require('../../../../../noapi');

const fn = async (query) => {
	const formResult = await noapi.do('forms:/bill/form/crud?formName=trader', query);
	return {
		billid: query.billid,
		formName: formResult.formName,
	};
};

module.exports = fn;
