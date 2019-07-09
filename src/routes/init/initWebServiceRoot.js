
const path = require('path');
const data = require('../../data');

/** @name me.initWebServiceRoot */
const fn = (callerModule) => {
	let webServiceRoot;

	// For debug
	if (callerModule) {
		webServiceRoot = path.resolve(callerModule.filename, '../');
	}
	else {
		// For installing (the path of noapi is ./node_modules/noapi)
		// The relativePath is the relative path of THIS file to the web service.
		const relativePath = '../../../../../../';
		webServiceRoot = path.resolve(module.filename, relativePath);
	}

	if (webServiceRoot === '/') {
		throw new Error(`The web service root / is invalid. \nIf you require('<work folder>\/noapi'), please use noapi({..., module}) or noapi.routes(app, {..., module}).`);
	}

	data.webServiceRoot = webServiceRoot;
};

module.exports = fn;
