
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('./data');
const lib = require('./__lib');

const folders = ['api', 'biz'];

const fn = () => {
	const root = data.webServiceRoot;
	const coreModules = {};

	folders.forEach(folder => {
		const folderPath = path.resolve(root + '/' + folder);

		if (fs.existsSync(folderPath)) {
			const indexJs = folderPath + '/index.js';

			if (fs.existsSync(indexJs)) {
				coreModules[folder] = require(folderPath);
			}
			else {
				const simulateIndexJs = {filename: indexJs};
				coreModules[folder] = kdo(simulateIndexJs);
			}
		}
	});

	// If there is no api folder, then fetch it via parsing biz folder
	if (!coreModules.api) {
		const apiPaths = lib.apiParser.objectToApis(coreModules.biz);
		const apiObject = lib.apiParser.apisToObject(apiPaths);
		coreModules.api = apiObject;
	}

	data.core = coreModules;
};

module.exports = fn;
