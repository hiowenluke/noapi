
const fs = require('fs');
const path = require('path');

// The demo of data.core
const core = {
	default: {

		// A function
		// Execute all function files in the aha directory in the specified order with kdo.
		aha: { // /<user project>/aha

		},

		api: { // /<user project>/api
			bill: { //				/bill
				form: {	//				/form
					crud: {}, //			/crud.js
				}
			},

			__define__: { // /<user project>/api/define.js // refer /noapi/src/api/define/__model.js

				apiInfos: {
					api: '/bill/form/crud', // If omitted, parse from url
					title: 'Bill - Form - Crud', // If omitted, parse from api
					url: 'http://localhost:3000/bill/form/crud?formname=trader',
				},

				// io: input params, output result
				ioInfos: {

					// Send it to server. If omitted, parse from url
					params: {
						formname: 'trader',
					},

					// Get it from server. It can be omitted if not required for testing.
					result: {
						"success": true,
						"data": {
							"formname": "trader"
						}
					},
				},

				testInfos: {

				}
			},
		},

		biz: { // /<user project>/biz
			bill: { // 				/bill
				form: { //  			/form
					crud: {}, // 			/crud.js
				}
			}
		}
	},

	api: { // The sysName is "api"
		// ...
	},

	forms: { // The sysName is "forms"
		// ...
	},

	erp: { // The sysName is "erp"
		// ...
	},

	mms: { // The sysName is "mms"
		// ...
	},
};

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
	apiDefineJsPath: {}, // {"default": "/path/to/user project/api/define.js"}

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
