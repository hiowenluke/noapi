
const me = require('kdo')();
const define = require('../define');
const transfer = require('../transfer');
const data = require('../../data');

/** @name me.api.init */
const fn = () => {

	global.api = {};

	// Append the transfer to the global so that the apis can calls each other. E.g:
	// 		await global.api.do('forms:/info/dropdownlist', query);
	global.api.do = transfer;

	// Use data.global.api instead of global.api in noapi to improve performance.
	data.global.api = {};
	data.global.api.do = transfer;

	// Load /api/define.js (if exists)
	define.init();

	// Add apiFn() if the /api/xxx/xxx.js does not exports a function.
	me.fixFn();
};

module.exports = fn;
