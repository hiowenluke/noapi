
const me = require('kdo').obj(module);
const data = require('../../data');

const fn = (options) => {

	me.initWebServiceRoot(options.module);
	me.initApiServices(options.apiPath);
	me.loadApiServices();

	data.assignRules = options.assignRules;
};

module.exports = fn;
