
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const lib = require('../../../__lib');
const shell = require('shelljs');

const getApiFromDefinition = (definition) => {
	let {api, url} = definition;
	if (!api) {
		// http://localhost:3000/bill/form/crud?formname=trader => /bill/form/crud
		api = lib.urlParser.getApiFromUrl(url);
	}
	return api;
};

const me = {
	removeTheLastAddedApiProperty(definitions) {

		// If the api property is last added like below,
		// that means it was added by noapi, so remove it.
		// 		{
		// 			url: "http://localhost:3000/sys/getApiVersion",
		// 			result: {
		// 				success: true,
		// 				data: {
		// 					apiVersion: "1.0.0"
		// 				}
		// 			},
		// 			api: "/sys/getApiVersion" // <- This one needs to be removed
		// 		}
		definitions.forEach(item => {
			const keys = Object.keys(item);
			if (keys[keys.length - 1] === 'api' && item.url) {
				delete item.api;
			}
		});
	},

	backupJsFile(jsFile) {
		if (!fs.existsSync(jsFile)) return;
		const dateTimeStr = lib.formatDateTimeStr();
		fs.renameSync(jsFile, jsFile.replace(/\.js$/g, '.bak.' + dateTimeStr + '.js'));
	},

	backupApiSubDirectories(apiDirectory, definitions) {
		const dateTimeStr = lib.formatDateTimeStr();
		const backupDirectory = apiDirectory + '/bak.' + dateTimeStr;
		fs.mkdirSync(backupDirectory);

		definitions.forEach(definition => {
			const api = getApiFromDefinition(definition);

			const temp = api.match(/\//g);
			const count = temp ? temp.length : 0;

			const isFile = count === 1; // "/about"
			const subDir = count > 1 ?
				api.substr(0, api.lastIndexOf('/')) : // "/bill/form/crud" => "/bill/form"
				api + '.js' // "/about.js"
			;

			const subPath = apiDirectory + subDir;
			const backupPath = backupDirectory + subDir;
			if (!fs.existsSync(subPath)) return;

			if (isFile) {
				fs.rename(subPath, backupPath);
			}
			else {
				fs.moveSync(subPath, backupPath);
			}
		});
	},

	writeToDefineJs(defineJsPath, definitions) {
		const definitionsStr = lib.formatJsonStr(definitions);
		const content = `
			const me = {definitionsStr};
			
			module.exports = me;
		`.replace(/\t/g, '').replace('{definitionsStr}', definitionsStr);

		fs.writeFileSync(defineJsPath, content, 'utf-8');
	},

	writeToDirectories(defineJsPath, definitions) {
		const apiDirectory = path.resolve(defineJsPath, '..');

		this.backupJsFile(defineJsPath);

		definitions.forEach(definition => {
			const api = getApiFromDefinition(definition);

			// Create directory recursively
			const branchFolder = api.substr(0, api.lastIndexOf('/')); // /bill/form/crud => /bill/form
			const branchPath = apiDirectory + branchFolder;
			shell.mkdir('-p', branchPath);

			// Create js file
			const jsFileName = api.substr(api.lastIndexOf('/') + 1) + '.js'; // /bill/form/crud => crud.js
			const jsFilePath = branchPath + '/' + jsFileName;
			this.writeToDefineJs(jsFilePath, definition);
		});
	}
};

module.exports = me;
