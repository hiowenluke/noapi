
const fs = require('fs');
const path = require('path');
const data = require('../data');

// The serviceName is the api service directory name, such as "api", "api-forms", etc.
const initServiceInfo = (serviceName) => {
	const isSimpleMode = data.isSimpleMode;
	const folderPath = data.apiServicesRoot + (isSimpleMode ? '' : '/' + serviceName);

	const coreModules = {};
	const coreModuleNames = ['aha', 'api', 'biz'];

	coreModuleNames.forEach(coreModuleName => {
		const coreFolderPath = path.resolve(folderPath + '/' + coreModuleName);
		if (fs.existsSync(coreFolderPath)) {
			coreModules[coreModuleName] = require(coreFolderPath);
		}
	});

	// api-xxx => xxx
	const sysName = data.serviceSysNames[serviceName];
	data.core[sysName] = coreModules;
};

/** @name me.loadApiServicesInfo */
const fn = () => {
	const serviceNames = data.serviceNames;
	serviceNames.forEach(serviceName => initServiceInfo(serviceName));
};

module.exports = fn;
