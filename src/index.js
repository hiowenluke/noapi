
const caller = require('caller');

const data = require('./__data');
const routes = require('./routes');
const utils = require('./utils');
const web = require('./web');


const noapi = (options = {}) => {


	return web(options, routes);
};

noapi.routes = routes;
noapi.params = utils.params;
noapi.url = utils.url;

module.exports = noapi;
