
const me = require('kdo').obj(module);
const define = require('../define');
const transfer = require('../transfer');

/** @name me.api.init */
const fn = () => {

	global.api = {};

	// Append the transfer to the global so that the apis can calls each other. E.g:
	// 		await global.api.do('forms:/info/dropdownlist', query);
	global.api.do = transfer;

	me.initRootAndNames();
	me.loadCoreModules();

	// Load /api/define.js (if exists)
	define.init();

	// Add apiFn() if the /api/xxx/xxx.js does not exports a function.
	me.fixFn();
};

module.exports = fn;
