
const fs = require('fs');
const path = require('path');
const caller = require('caller');

const data = require('./__data');
const routes = require('./routes');
const utils = require('./utils');
const web = require('./web');

const optionsDefault = {
	serverName: 'default',
	port: 3000,
};

const getWebServiceRoot = (pathToCaller) => {

	if (pathToCaller === '/') {
		throw new Error('no package.json found in parent path of ' + pathToCaller);
	}

	// Find package.json in parent path
	const parentPath = path.resolve(pathToCaller, '..');
	const packageJson = parentPath + '/package.json';

	// Found the package.json
	if (fs.existsSync(packageJson)) {

		// The parent path is the web services root directory
		return parentPath;
	}
	else {
		// Not found
		// Recurse to Find
		return getWebServiceRoot(parentPath);
	}
};

const noapi = (options = {}) => {

	data.webServiceRoot = getWebServiceRoot(caller());
	data.assignRules = options.assignRules;

	options.serverName = options.serverName || optionsDefault.serverName;
	options.port = options.port || optionsDefault.port;

	return web(options, routes);
};

noapi.routes = routes;
noapi.params = utils.params;
noapi.url = utils.url;

module.exports = noapi;
