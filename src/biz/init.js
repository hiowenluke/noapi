
const me = require('kdo')();
const data = require('../data');

/** @name me.biz.init */
const fn = () => {

	global.biz = {};

	// Add global.biz.do to convenient api quick calls to its biz method
	// 		complete: 		data.core.mms.biz.bill.mnf.manuPlan(query)
	// 		Shorthand: 		global.biz.do(query)
	global.biz.do = me.do;

	// Use data.global.biz instead of global.biz in noapi to improve performance.
	data.global.biz = {do: me.do};
};

module.exports = fn;
