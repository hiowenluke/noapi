
const me = require('kdo').obj(module);

/** @name me.loadApiServices */
const fn = (apiServicePath, module) => {

	me.initWebServiceRoot(module);
	me.initApiServiceNames(apiServicePath);
	me.loadApiServicesInfo();
};

module.exports = fn;
