
const me = require('kdo').obj(module);
const define = require('kdo').obj(module, '../define');
const data = require('../../data');
const transfer = require('../transfer');

/** @name me.api.init */
const fn = () => {

	global.api = {};

	// Append the transfer to the global so that the apis can calls each other. E.g:
	// 		await global.api.do('forms:/info/dropdownlist', query);
	global.api.do = transfer;

	me.initRootAndNames();
	me.loadCoreModules();

	// If the apis are defined in /api/define.js
	if (data.apiDefineJsPaths.length > 0) {

		// Load apis from definition
		define.load();
	}

	// Add apiFn() if the /api/xxx/xxx.js does not exports a function.
	me.fixFn();
};

module.exports = fn;
