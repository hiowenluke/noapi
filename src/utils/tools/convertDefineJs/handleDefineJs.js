
const _ = require('lodash');
const lib = require('./__lib');
const converter = require('../../../api/define/parseDefineJs/forApi/converter');

const fn = (defineJsPath, targetType) => {
	let definitions = require(defineJsPath);

	const sourceType = _.isPlainObject(definitions) ? 'object' : Array.isArray(definitions) ? 'array' : null;
	if (!sourceType) {
		throw new Error('The define.js must be an array or an object');
	}

	if (sourceType === targetType) {
		return console.log('Nothing to do. The target type is as same as source type.');
	}

	if (sourceType === 'object') {
		definitions = converter.definitionsObjectToArray(definitions);
		lib.removeTheLastAddedApiProperty(definitions);
	}

	if (sourceType === 'array') {
		// do nothing
	}

	// If no value is specified for targetType, the inverse of sourceType is used.
	if (!targetType) {
		targetType = sourceType === 'array' ? 'object' : 'array';
	}

	if (targetType === 'object') {
		const object = converter.definitionsArrayToObject(definitions);
		lib.backupJsFile(defineJsPath);
		lib.writeToDefineJs(defineJsPath, object);
	}

	if (targetType === 'array') {
		const array = definitions;
		lib.backupJsFile(defineJsPath);
		lib.writeToDefineJs(defineJsPath, array);
	}

	if (targetType === 'directory') {
		lib.writeToDirectories(defineJsPath, definitions);
	}
};

module.exports = fn;
