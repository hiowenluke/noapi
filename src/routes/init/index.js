
const me = require('kdo').obj(module);

const fn = (apiServicePath, module) => {
	me.initWebServiceRoot(module);
	me.initApiServices(apiServicePath);
};

module.exports = fn;
