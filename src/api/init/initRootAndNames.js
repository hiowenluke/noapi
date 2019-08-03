
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
		data.isSimpleMode = true;
		apiServicesRoot = webServiceRoot;
		serviceNames.push('default');
	}
	else {
		// If there is only on service, then it is simple mode too.
		// E.g., only run or test the api-erp service.
		data.isSimpleMode = serviceNames.length === 1;
	}

	data.apiServicesRoot = apiServicesRoot;
	data.serviceNames = serviceNames; // ["api", "api-xxx", ...]

	serviceNames.forEach(serviceName => {

		// api-xxx => xxx
		const sysName = serviceName.indexOf('-') >= 0 ? serviceName.split('-')[1] : serviceName;

		data.sysNames.push(sysName);
		data.serviceSysNames[serviceName] = sysName;
	});
};

module.exports = fn;
