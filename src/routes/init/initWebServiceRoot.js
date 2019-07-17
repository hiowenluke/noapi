
const fs = require('fs');
const path = require('path');
const data = require('../../data');

const getInstallationPath = () => {

	// For .../node_modules/noapi
	// Path of this file is .../node_modules/noapi/src/routes/init/initWebServiceRoot.js

	const relativePath = '../../../../../';
	const nodeModulesPath = path.resolve(module.filename, relativePath);
	const isInstalled = /\/node_modules$/.test(nodeModulesPath);

	return isInstalled ? nodeModulesPath + '/noapi' : '';
};

/** @name me.initWebServiceRoot */
const fn = (callerModule) => {
	let webServiceRoot;

	// For debugging in user's project
	if (callerModule) {
		webServiceRoot = path.resolve(callerModule.filename, '../');
	}
	else {
		// For .../xxx/node_modules/noapi
		const installationPath = getInstallationPath();
		if (installationPath) {

			// .../xxx
			webServiceRoot = path.resolve(installationPath, '../../');
		}
		else {
			// For examples and tests in noapi source
			webServiceRoot = path.resolve(data.pathToCaller, '../');
		}
	}

	if (webServiceRoot === '/') {
		throw new Error(`The web service root / is invalid. 
		
			If you:
				require('.../noapi') // for debugging noapi in your project
				
			please do:
				noapi({module});

			or:
				const options = {...};
				options.module = module;
				noapi(options);
		
		`.replace(/\n\t\t\t/g, '\n\t').replace(/\t/g, '    '));
	}

	data.webServiceRoot = webServiceRoot;
};

module.exports = fn;
