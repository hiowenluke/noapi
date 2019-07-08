
const fs = require('fs');
const path = require('path');
const data = require('../data');

// The servername is the service name of the subsystem,
// it is equals to the directory name, such as api, api-forms, etc.
const initServerInfo = (serverName) => {
	const folderPath = data.projectRoot + '/' + serverName;

	const coreModules = {};
	const coreModuleNames = ['aha', 'api', 'biz'];

	coreModuleNames.forEach(coreModuleName => {
		const coreFolderPath = path.resolve(folderPath + '/' + coreModuleName);
		if (fs.existsSync(coreFolderPath)) {
			coreModules[coreModuleName] = require(coreFolderPath);
		}
	});

	// api-xxx => xxx
	const sysName = serverName.indexOf('-') === -1 ? serverName : serverName.split('-')[1];
	data.core[sysName] = coreModules;

	data.serverNames.push(serverName);
	data.sysNames.push(sysName);
};

const getServerNames = () => {
	const serverNames = [];

	const root = data.projectRoot;
	const folderNames = fs.readdirSync(root);

	folderNames.forEach(folderName => {
		const folderPath = root + '/' + folderName;
		if (!fs.statSync(folderPath).isDirectory()) return;

		// If the foldername is api or start with api-, then its an api folder
		if (folderName === 'api' || /^api-/.test(folderName)) {
			serverNames.push(folderName);
		}
	});

	return serverNames;
};

const loadServers = () => {
	const serverNames = getServerNames();
	serverNames.forEach(serverName => initServerInfo(serverName));
};

const initProjectRoot = (relateApiRootPath, callerModule) => {
	let projectRoot;

	// For debug (the path of noapi is not ./node_modules/noapi)
	if (callerModule) {
		projectRoot = path.resolve(callerModule.filename, relateApiRootPath + '../../');
	}
	else {
		// For installing (the path of noapi is ./node_modules/noapi),
		// the relative path to the web server is '../../../../../'.
		projectRoot = path.resolve(module.filename, relateApiRootPath + '../../../../../');
	}

	data.projectRoot = projectRoot;
};

/** @name me.loadApiServers */
const fn = (apiPath = './', module) => {
	initProjectRoot(apiPath, module);
	loadServers();
};

module.exports = fn;
