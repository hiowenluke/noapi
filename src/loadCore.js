
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');
const data = require('./data');

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

	if (!coreModules.api) {
		// {say: hi: {}} => "/say/hi"
		coreModules.api = lib.apiParser.objectToApis(coreModules.biz);
	}

	data.core = coreModules;
};

module.exports = fn;
