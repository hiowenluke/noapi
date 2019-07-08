
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
		// the relative path to the web service is '../../../../../../'.
		webServiceRoot = path.resolve(module.filename, '../../../../../../');
	}

	if (webServiceRoot === '/') {
		throw new Error(`The web service root / is invalid. If you require('<work folder>\/noapi'), use noapi.routes(app, {module}) please.`);
	}

	data.webServiceRoot = webServiceRoot;
};

module.exports = fn;
