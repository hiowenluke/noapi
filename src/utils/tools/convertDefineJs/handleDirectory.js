
const _ = require('lodash');
const kdo = require('kdo');
const lib = require('./__lib');
const converter = require('../../../api/define/parseDefineJs/forApi/converter');

const fn = (apiDirectory, targetType) => {
	if (targetType === 'directory') {
		return console.log('Nothing to do. The target type is as same as source type.');
	}

	const defineJsPath = apiDirectory + '/define.js';

	// Require the entire api directory to be an object
	const definitionsObj = kdo(apiDirectory);

	const definitionsArr = converter.definitionsObjectToArray(definitionsObj);
	lib.removeTheLastAddedApiProperty(definitionsArr);

	if (targetType === 'object') {
		lib.writeToDefineJs(defineJsPath, definitionsObj);
	}

	if (targetType === 'array') {
		lib.writeToDefineJs(defineJsPath, definitionsArr);
	}

	// Move the original api sub directories to .bak.xxx
	lib.backupApiSubDirectories(apiDirectory, definitionsArr);
};

module.exports = fn;
