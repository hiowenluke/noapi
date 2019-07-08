
const me = require('kdo').obj(module);

const fn = () => {

	global.api = {};

	// Append the transfer to the global so that the apis can calls each other. E.g:
	// await global.api.do('forms:/info/dropdownlist', query);
	global.api.do = me.transfer;

	// Add function to all project apis (if the api's js file content is empty)
	me.fixFn();
};

module.exports = fn;
