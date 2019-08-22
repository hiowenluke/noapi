
const me = require('kdo')();
const bizDo = require('../do');
const data = require('../../data');

/** @name me.biz.init */
const fn = () => {

	global.biz = {};

	// Add global.biz.do to convenient api quick calls to its biz method
	// 		complete: 		data.core.mms.biz.bill.mnf.manuPlan(query)
	// 		Shorthand: 		global.biz.do(query)
	global.biz.do = bizDo;

	// Use data.global.biz instead of global.biz in noapi to improve performance.
	data.global.biz = {};
	data.global.biz.do = bizDo;

	me.parseParams();
};

module.exports = fn;
