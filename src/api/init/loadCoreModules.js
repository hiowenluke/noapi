
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('../../data');

// The serviceName is the api service directory name, such as "api", "api-forms", etc.
const loadCoreModules = (serviceName) => {
	const isSimpleMode = data.isSimpleMode;
	const folderPath = data.apiServicesRoot + (isSimpleMode ? '' : '/' + serviceName);

	const coreModules = {};
	const coreModuleNames = ['aha', 'api', 'biz'];
	let apiDefineJsPath;

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
					apiDefineJsPath = defineJs;
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
	data.core[sysName].apiDefineJsPath = apiDefineJsPath;
};

/** @name me.loadCoreModules */
const fn = () => {
	const serviceNames = data.serviceNames;
	serviceNames.forEach(serviceName => loadCoreModules(serviceName));
};

module.exports = fn;
