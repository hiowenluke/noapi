
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('../../data');

// The serviceName is the api service directory name, such as "api", "api-forms", etc.
const initServiceInfo = (serviceName) => {
	const isSimpleMode = data.isSimpleMode;
	const folderPath = data.apiServicesRoot + (isSimpleMode ? '' : '/' + serviceName);

	const coreModules = {};
	const coreModuleNames = ['aha', 'api', 'biz'];

	coreModuleNames.forEach(coreModuleName => {
		const coreFolderPath = path.resolve(folderPath + '/' + coreModuleName);

		// There is .../aha or .../api or .../biz directory
		if (fs.existsSync(coreFolderPath)) {

			if (fs.existsSync(coreFolderPath + '/index.js')) {
				coreModules[coreModuleName] = require(coreFolderPath);
			}
			else {
				// But there is no .../index.js

				// Simulate index.js as module.filename for kdo.
				// Note it is required for flag isSimulatedIndexJs.
				const module = {filename: coreFolderPath + '/index.js', isSimulatedIndexJs: true};

				if (coreModuleName === 'aha') {
					coreModules[coreModuleName] = kdo.flow(module, 'query');
				}

				if (coreModuleName === 'api' || coreModuleName === 'biz') {
					coreModules[coreModuleName] = kdo.obj(module);
				}
			}
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
