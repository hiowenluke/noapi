
const fs = require('fs');
const path = require('path');

/** @name me.data */
const me = {
	webServiceRoot: '', // root path of web service
	apiServicesRoot: '', // root path of api service(s)
	apiDefineJsPaths: [], // path of .../api/defines.js in all api services
	isSimpleMode: true, // single api service (web service is api service)

	serverOptions: {
		serverName: 'default',
		http: 'localhost',
		port: '3000',
	},

	serviceNames: [], // ["api-forms", "api-erp", "api-mms"]
	sysNames: [], // ["forms", "erp", "mms"] // without prefix "api-"
	serviceSysNames: {}, // {"api-forms": "forms", "api-erp": "erp", "api-mms": "mms"} // for getting sysName by serviceName

	core: {}, // {aha, api, biz} // see the demo of it at top of this file

	assignRules: [], // rules of assigning

	isSilence: false, // do not print logs if it is true

	power: null, // the custom function to handle query

	init(options) {
		this.webServiceRoot = this.getWebServiceRoot(options.pathToCaller);
		this.assignRules = options.assignRules;
		this.power = options.power;

		options.serverName && (this.serverOptions.serverName = options.serverName);
		options.http && (this.serverOptions.http = options.http);
		options.port && (this.serverOptions.port = options.port);
	},

	getWebServiceRoot(pathToCaller) {

		if (pathToCaller === '/') {
			throw new Error('no package.json found in parent path of ' + pathToCaller);
		}

		// Find package.json in parent path
		const parentPath = path.resolve(pathToCaller, '..');
		const packageJson = parentPath + '/package.json';

		// Found the package.json
		if (fs.existsSync(packageJson)) {

			// The parent path is the web services root directory
			return parentPath;
		}
		else {
			// Not found
			// Recurse to Find
			return this.getWebServiceRoot(parentPath);
		}
	}
};

module.exports = me;
