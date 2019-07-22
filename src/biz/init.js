
const me = require('kdo').obj(module);

/** @name me.biz.init */
const fn = () => {

	global.biz = {};

	// Add global.biz.do to convenient api quick calls to its biz method
	// 		complete: 		data.core.mms.biz.bill.mnf.manuPlan(query)
	// 		Shorthand: 		global.biz.do(query)
	global.biz.do = me.do;
};

module.exports = fn;
