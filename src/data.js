
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');

const config = require('./config');
const keyPaths = require('keypaths');

const loadFolder = (folderName) => {
	let obj;

	const root = config.webServiceRoot;
	const folderPath = path.resolve(root + '/' + folderName);

	if (fs.existsSync(folderPath)) {
		const indexJs = folderPath + '/index.js';

		if (fs.existsSync(indexJs)) {
			obj = require(folderPath);
		}
		else {
			const simulateIndexJs = {filename: indexJs};
			obj = kdo(simulateIndexJs);
		}
	}

	return obj;
};

const loadFolders = () => {
	const core = {};
	const bizFolderName = config.folder.replace(/^.\//, ''); // ./biz => biz

	core.api = loadFolder('api');
	core.biz = loadFolder(bizFolderName);

	const obj = core.api || core.biz || {};
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
