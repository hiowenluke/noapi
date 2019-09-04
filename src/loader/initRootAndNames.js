
const fs = require('fs');
const path = require('path');
const data = require('../data');
const lib = require('../__lib');

const getApiServiceNames = (root) => {
	const serviceNames = [];
	const folderNames = fs.readdirSync(root);
	const serviceName = lib.getApiServiceNameFromPath(root);

	// For ".../api", e.g.:
	// 		01-api-definition-by-array/api
	if (lib.isLegalApiServiceName(serviceName)) {
		serviceNames.push(serviceName);
		return serviceNames;
	}

	// For ".../api/api", e.g.:
	//		20-[multi]-seperate-api-and-web-services/api/api
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

		else

		// If the folder name is start with "api-", then its an api service folder
		if (/^api-/.test(folderName)) {
			serviceNames.push(folderName);
		}
	});

	return serviceNames;
};

/** @name me.initRootAndNames */
const fn = () => {
	const webServiceRoot = data.webServiceRoot;
	const isTestMode = data.isTestMode;
	const testOptions = data.testOptions;

	let apiServicesRoot;
	let serviceNames = [];
	let isSimpleMode;

	// Automatically search the api services directory
	// in current directory and parent directory
	const searchPaths = ['./', '../'];

	for (let i = 0; i < searchPaths.length; i ++) {
		const searchPath = searchPaths[i];
		const root = path.resolve(webServiceRoot, searchPath); // .../api-xxx

		// If it is only test a separate api service, then does not load the other api services.
		if (isTestMode && testOptions.isFromApiService) {
			if (root !== testOptions.apiServiceRoot) continue;
		}

		const thisServiceNames = getApiServiceNames(root);

		if (thisServiceNames.length) {
			apiServicesRoot = root;
			serviceNames = thisServiceNames;
			break;
		}
	}

	// If the api service directory is not found, it is simple mode, that is,
	// the current web service directory is the api service directory,
	// then set the service name to "default".
	if (!serviceNames.length) {
		isSimpleMode = true;
		apiServicesRoot = webServiceRoot;
		serviceNames = ['default'];
	}
	else
	if (serviceNames.length === 1) {
		isSimpleMode = true;

		const serviceName = serviceNames[0];
		const reg = new RegExp('/' + serviceName + '$');
		if (!reg.test(apiServicesRoot)) {
			apiServicesRoot += '/' + serviceName;
		}

		serviceNames = [serviceName];
	}
	else {
		isSimpleMode = false;
	}

	serviceNames.forEach(serviceName => {

		// api-xxx => xxx
		const sysName = serviceName.indexOf('-') >= 0 ? serviceName.split('-')[1] : serviceName;

		data.sysNames.push(sysName);
		data.serviceSysNames[serviceName] = sysName;

		const folderName = isSimpleMode ? '' : '/' + serviceName;
		data.apiServicesRoot[serviceName] = apiServicesRoot + folderName;
	});

	data.isSimpleMode = isSimpleMode;
	data.serviceNames = serviceNames; // ["api", "api-xxx", ...]
};

module.exports = fn;
