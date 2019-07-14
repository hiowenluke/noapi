
const routes = require('./routes');
const web = require('./web');

const optionsDefault = {
	serverName: 'default',
	port: 3000,
};

const noapi = (options = {}) => {
	options.serverName = options.serverName || optionsDefault.serverName;
	options.port = options.port || optionsDefault.port;
	return web(options, routes);
};

noapi.routes = routes;
module.exports = noapi;
