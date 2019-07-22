
const caller = require('caller');
const me = require('kdo').obj(module);

const noapi = (options = {}) => {
	options.pathToCaller = caller();


	return web(options, routes);
};

noapi.routes = me.routes;
noapi.params = me.utils.params;
noapi.url = me.utils.url;

module.exports = noapi;
