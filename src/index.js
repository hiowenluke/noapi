
const routes = require('./routes');
const web = require('./web');
const data = require('./data');
const caller = require('caller');

const optionsDefault = {
	serverName: 'default',
	port: 3000,
};

const noapi = (options = {}) => {
	data.pathToCaller = caller();

	options.serverName = options.serverName || optionsDefault.serverName;
	options.port = options.port || optionsDefault.port;
	return web(options, routes);
};

noapi.routes = routes;
module.exports = noapi;
