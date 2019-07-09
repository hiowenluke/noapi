
const routes = require('./routes');
const web = require('./web');

const noapi = (options) => {
	return web(options, routes);
};

noapi.routes = routes;
module.exports = noapi;
