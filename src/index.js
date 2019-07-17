
const caller = require('caller');

const data = require('./data');
const routes = require('./routes');
const utils = require('./utils');
const web = require('./web');

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
noapi.params = utils.params;
noapi.url = utils.url;

module.exports = noapi;
