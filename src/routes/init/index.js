
const me = require('kdo').obj(module);

const fn = (options) => {

	me.initWebServiceRoot(options.module);
	me.initApiServices(options.apiPath);
	me.loadApiServices();
};

module.exports = fn;
