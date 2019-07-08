
const me = require('kdo').obj(module);

const fn = () => {

	global.biz = {};

	// Add global.biz.do to convenient api quick calls to its biz method
	// 		complete: 		data.core.mms.biz.manufacturing.business.productionPlan(query)
	// 		Shorthand: 		global.biz.do(query)
	global.biz.do = me.do;
};

module.exports = fn;
