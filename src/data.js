
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');

const config = require('./config');
const keyPaths = require('keypaths');

const loadFolders = () => {
	const root = config.webServiceRoot;
	const core = {};

	const folders = ['api', 'biz'];
	folders.forEach(folder => {
		const folderPath = path.resolve(root + '/' + folder);

		if (fs.existsSync(folderPath)) {
			const indexJs = folderPath + '/index.js';

			if (fs.existsSync(indexJs)) {
				core[folder] = require(folderPath);
			}
			else {
				const simulateIndexJs = {filename: indexJs};
				core[folder] = kdo(simulateIndexJs);
			}
		}
	});

	const obj = core.api || core.biz;
	const apiPaths = keyPaths.toPaths(obj); // ["say.hi"]

	// "say.hi" => "/say/hi"
	const apis = apiPaths.map(item => '/' + item.replace(/\./g, '/'));

	const apisX = {};

	// {"/say/hi": "say.hi"}
	apis.forEach((api, index) => {apisX[api] = apiPaths[index]});

	return {apis, apisX, handlers: core.biz};
};

const me = {
	apis: [], // ["/say/hi"]
	aha: {}, // {"/say/hi": "say.hi"}
	handlers: {}, // {say: {hi: f()}}

	init() {
		const {apis, apisX, handlers} = loadFolders();

		this.apis = apis;
		this.apisX = apisX;
		this.handlers = handlers;
	},
};

module.exports = me;
