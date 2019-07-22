
const me = require('kdo').obj(module);
const data = require('../../data');

const fn = () => {

	global.api = {};

	// Append the transfer to the global so that the apis can calls each other. E.g:
	// await global.api.do('forms:/info/dropdownlist', query);
	global.api.do = me.transfer;

	// All apis are defined in /api/define.js
	if (data.apiDefinePaths.length > 0) {

		// Load apis from definition
		me.define.load();
	}

	// Add apiFn() if the /api/xxx/xxx.js does not exports a function.
	me.fixFn();
};

module.exports = fn;
