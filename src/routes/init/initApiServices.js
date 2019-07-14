
const fs = require('fs');
const path = require('path');
const data = require('../../data');

const getApiServiceNames = (root) => {
	const serviceNames = [];
	const folderNames = fs.readdirSync(root);

	folderNames.forEach(folderName => {
		const folderPath = root + '/' + folderName;
		if (!fs.statSync(folderPath).isDirectory()) return;

		// If the foldername is "api", then check it
		if (folderName === 'api') {

			// If there is a package.json in the directory, then its an api service folder
			if (fs.existsSync(folderPath + '/package.json')) {
				serviceNames.push(folderName);
			}
			else {
				// If there is no package.json in the API directory,
				// it is not an api service directory, we should ignore it.
			}
		}

		// If the folder name is start with "api-", then its an api service folder
		if (/^api-/.test(folderName)) {
			serviceNames.push(folderName);
		}
	});

	return serviceNames;
};

/** @name me.initApiServiceNames */
const fn = (apiServicesRelativePath) => {
	const webServiceRoot = data.webServiceRoot;
	let apiServicesRoot;
	let serviceNames;

	// If the relative path of the api service is specified, use it.
	if (apiServicesRelativePath) {
		apiServicesRoot = path.resolve(webServiceRoot, apiServicesRelativePath);
		serviceNames = getApiServiceNames(apiServicesRoot);
	}
	else {
		// Automatically search the api services directory
		// in current directory and parent directory
		const searchPaths = ['./', '../'];

		for (let i = 0; i < searchPaths.length; i ++) {
			const searchPath = searchPaths[i];
			const root = path.resolve(webServiceRoot, searchPath);
			const thisServiceNames = getApiServiceNames(root);

			if (thisServiceNames.length) {
				apiServicesRoot = root;
				serviceNames = thisServiceNames;
				break;
			}
		}
	}

	// If the api service directory is not found, it is simple mode, that is,
	// the current web service directory is the api service directory,
	// then set the service name to "default".
	if (!serviceNames.length) {
		data.isSimpleMode = true;
		apiServicesRoot = webServiceRoot;
		serviceNames.push('default');
	}
	else {
		data.isSimpleMode = false;
	}

	data.apiServicesRoot = apiServicesRoot;
	data.serviceNames = serviceNames; // ["api", "api-xxx", ...]

	serviceNames.forEach(serviceName => {

		// If there is only one service name "api" or "default", then set it as the name of subsystem.
		// Otherwise, the name of subsystem is "xxx", which is the second part of "api-xxx".
		const sysName = serviceName === 'api' || serviceName === 'default' ? 'default' : serviceName.split('-')[1];

		data.sysNames.push(sysName);
		data.serviceSysNames[serviceName] = sysName;
	});
};

module.exports = fn;
