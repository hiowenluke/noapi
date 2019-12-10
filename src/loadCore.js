
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

	data.core = coreModules;
};

module.exports = fn;
