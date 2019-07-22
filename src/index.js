
const caller = require('caller');
const me = require('kdo').obj(module);

const noapi = (options = {}) => {
	options.pathToCaller = caller();

	me.data.init(options);
	me.aha.init();
	me.api.init();
	me.biz.init();

	return me.web.init(options);
};

noapi.routes = me.routes;
noapi.params = me.utils.params;
noapi.url = me.utils.url;

module.exports = noapi;
