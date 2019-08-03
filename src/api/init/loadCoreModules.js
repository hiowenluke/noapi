
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('../../data');

// The serviceName is the api service directory name, such as "api", "api-forms", etc.
const loadCoreModules = (serviceName) => {

	const folderName = data.isSimpleMode ? '' : '/' + serviceName;
	const folderPath = data.apiServicesRoot + folderName;

	const coreModules = {};
	const coreModuleNames = ['aha', 'api', 'biz'];
	let defineJsFilename;

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

				const defineJsFilename_ = coreFolderPath + '/define.js';

				// If there is /api/define.js
				if (coreModuleName === 'api' && fs.existsSync(defineJsFilename_)) {
					defineJsFilename = defineJsFilename_;
				}
				else {
					const simulateIndexJs = {filename: indexJs};

					if (coreModuleName === 'aha') {
						coreModules[coreModuleName] = kdo.flow(simulateIndexJs, 'query');
					}

					if (coreModuleName === 'api' || coreModuleName === 'biz') {
						coreModules[coreModuleName] = kdo(simulateIndexJs);
					}
				}
			}
		}
	});

	// api-xxx => xxx
	const sysName = data.serviceSysNames[serviceName];
	data.core[sysName] = coreModules;
	data.defineJs[sysName] = {filename: defineJsFilename};
};

/** @name me.loadCoreModules */
const fn = () => {
	const serviceNames = data.serviceNames;
	serviceNames.forEach(serviceName => loadCoreModules(serviceName));
};

module.exports = fn;
