
const path = require('path');
const data = require('../../data');

/** @name me.initWebServiceRoot */
const fn = (callerModule) => {
	let webServiceRoot;

	// For debugging in user's project
	if (callerModule) {
		webServiceRoot = path.resolve(callerModule.filename, '../');
	}
	else {
		// For noapi/examples
		if (data.pathToCaller.indexOf(`/noapi/examples/`) >= 0) {
			webServiceRoot = path.resolve(data.pathToCaller, '../');
		}
		else {
			// For installing (the path of noapi is ./node_modules/noapi)
			// The relativePath is the relative path of THIS file to the web service.
			const relativePath = '../../../../../../';
			webServiceRoot = path.resolve(module.filename, relativePath);
		}
	}

	if (webServiceRoot === '/') {
		throw new Error(`The web service root / is invalid. 
		
			If you:
				require('.../noapi') // for debugging noapi in your project
				
			please do:
				noapi({module});

			or:
				const options = {...};
				options.module = module;
				noapi(options);
		
		`.replace(/\n\t\t\t/g, '\n\t').replace(/\t/g, '    '));
	}

	data.webServiceRoot = webServiceRoot;
};

module.exports = fn;
