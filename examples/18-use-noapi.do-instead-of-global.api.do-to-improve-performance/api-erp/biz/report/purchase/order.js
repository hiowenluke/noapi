
// const noapi = require('noapi');
const noapi = require('../../../../../noapi');

const fn = async (query) => {
	const formResult = await noapi.do('forms:/bill/form/crud?formname=trader', query);
	return {
		billid: query.billid,
		formname: formResult.formname,
	};
};

module.exports = fn;
