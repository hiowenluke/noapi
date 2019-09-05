
const fs = require('fs');
const handleDefineJs = require('./handleDefineJs');
const handleDirectory = require('./handleDirectory');

const configDemo = {
	apiDirectory: '/MyNodeJS/noapi/examples/01-api-definition-by-array/api',
	targetType: 'array',
};

const fn = (config) => {
	const {apiDirectory, targetType} = config;
	const defineJsPath = apiDirectory + '/define.js';

	if (fs.existsSync(defineJsPath)) {
		handleDefineJs(defineJsPath, targetType);
	}
	else {
		handleDirectory(apiDirectory, targetType);
	}
};

fn(configDemo);
module.exports = fn;
