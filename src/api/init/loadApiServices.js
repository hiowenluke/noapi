
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('../../__data');

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

			const indexJs = coreFolderPath + '/index.js';
			if (fs.existsSync(indexJs)) {
				coreModules[coreModuleName] = require(coreFolderPath);
			}
			else {
				// But there is no .../index.js

				const defineJs = coreFolderPath + '/define.js';

				// If there is /api/define.js
				if (coreModuleName === 'api' && fs.existsSync(defineJs)) {

					// Save it. The routes/api/init.js will do something for this file.
					data.apiDefinePaths.push(defineJs);
				}
				else {
					// Simulate index.js as module.filename for kdo.
					// Note it is required for flag isSimulatedIndexJs.
					const module = {filename: indexJs, isSimulatedIndexJs: true};

					if (coreModuleName === 'aha') {
						coreModules[coreModuleName] = kdo.flow(module, 'query');
					}

					if (coreModuleName === 'api' || coreModuleName === 'biz') {
						coreModules[coreModuleName] = kdo.obj(module);
					}
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