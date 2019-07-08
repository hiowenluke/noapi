
const data = require('../../data');
const lib = require('../__lib');

// Convenient api quick calls to its biz method
// 		complete: 		data.core.mms.biz.bill.mnf.manuPlan(query)
// 		Shorthand: 		global.biz.do(query)
// Note:
// 		Can only be called internally by the current subsystem, not across subsystems
const fn = async (query) => {

	// Fetch sysName and api path from query.__
	//		sysName: "mms"
	//		apiPath: "bill.mnf.manuPlan"
	const {sysName, apiPath} = query.__;

	// Get the biz object of the current subsystem,
	// for example: data.core.mms.biz
	const sysBizs = data.core[sysName].biz;

	// Get biz functions based on sysName, apiPath, sysBizs,
	// for example: data.core.mms.biz.bill.mnf.manuPlan
	const sysBizFn = lib.getSysApiFn(sysName, apiPath, sysBizs);

	const result = await sysBizFn(query);
	return result;
};

module.exports = fn;
