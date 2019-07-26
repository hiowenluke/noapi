
const fs = require('fs');
const path = require('path');
const kdo = require('kdo');

const dataDemo = {

	// The demo of data.core
	core: {
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
				}
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
	},

	// The demo of data.defineJs
	defineJs: {
		filename: "/path/to/user project/api/define.js", // Refer /noapi/src/defineJs_demos.js

		api: {
			api: '/bill/form/crud', // If omitted, parse from url
			title: 'Bill - Form - Crud', // If omitted, parse from api
			url: 'http://localhost:3000/bill/form/crud?formname=trader',
		},

		docs: [
			{
				// io: input params, output result
				io: {

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

				test: {

					// Call specific apis before do with test url if needed.
					// E.g., insert some data to db before do with test url.
					// The beforeDo can be an array, or an api, title, url, or some other specified property.
					beforeDo: [
						'/bill/form/crud', // by api
						'Bill - Form - Crud', // by title
						'http://localhost:3000/bill/form/crud?formname=trader', // by url
						'id@123', // by some other specified property, such as id, e.g., {id: 123, api: '/xxx', ...}
					],

					// The test url. If omitted, use the demo url.
					// E.g., the test url carries more parameters than the demo url for specific purposes.
					url: undefined,

					// How to get the result. If omitted, use the demo url.
					// E.g., after deleting the data via test url, re-acquire the data to verify if it is exists.
					// The usage is the same as beforeDo.
					getResult: undefined,

					// Call specific apis after get the test result if needed.
					// E.g., delete the inserted data in before.
					// The usage is the same as beforeDo.
					afterDo: undefined,

					// See above section "4. With test ..." for the usage of verify
					verify(resultText, resultObject) {
						return resultText.indexOf(`"formname":"trader"`) >= 0;
					}
				}
			}
		]
	}
};

const tools = {
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
	},

	getIsTestMode(webServiceRoot) {
		let parent = module;
		let isTestMode;

		// If the ancestor's module.filename contains webServiceRoot + "/test/", then it is test.
		const target = (webServiceRoot + '/test/').replace(/\//g, '\\/');

		while (true) {
			const reg = new RegExp(target, 'i');
			if (reg.test(parent.filename)) {
				isTestMode = true;
				break;
			}

			parent = parent.parent;
			if (!parent) break;
		}

		return isTestMode;
	},

	loadGlobalLib(libName, webServiceRoot) {
		if (!libName) return;

		const module = {filename: webServiceRoot + '/' + libName + '/.'};
		global[libName] = kdo.obj(module);
	}
};

/** @name me.data */
const me = {
	isSimpleMode: true, // Single api service (the web service is api service)

	webServiceRoot: '', // The root path of web service
	apiServicesRoot: '', // The root path of api service(s)
	testRoot: '', // The root path of test

	serverOptions: {
		serverName: 'default',
		http: 'localhost',
		port: '3000',
	},

	serviceNames: [], // ["api-forms", "api-erp", "api-mms"]
	sysNames: [], // ["forms", "erp", "mms"] // Without prefix "api-"
	serviceSysNames: {}, // {"api-forms": "forms", "api-erp": "erp", "api-mms": "mms"} // For getting sysName by serviceName

	core: {}, // {aha, api, biz} // See the demo of it at top of this file
	defineJs: {}, // {default: {filename, api, io, test}} // See the demo of it at top of this file

	assignRules: [], // The rules of assigning

	isTestMode: false, // If noapi is running from /test directory, then it is true.
	isSilence: false, // Do not print logs if it is true

	power: null, // The custom function to handle query

	init(options) {
		this.webServiceRoot = tools.getWebServiceRoot(options.pathToCaller);
		this.isTestMode = tools.getIsTestMode(this.webServiceRoot);

		this.assignRules = options.assignRules;
		this.power = options.power;

		options.serverName && (this.serverOptions.serverName = options.serverName);
		options.http && (this.serverOptions.http = options.http);
		options.port && (this.serverOptions.port = options.port);

		// Load options.globalLib as global.lib
		tools.loadGlobalLib(options.globalLib, this.webServiceRoot);
	},

	initForTest(pathToCaller) {
		this.webServiceRoot = tools.getWebServiceRoot(pathToCaller);
		this.isTestMode = true;

		// If pathToCaller is .../test/api/index.js, then the root path of test is .../test/api
		this.testRoot = path.resolve(pathToCaller, '../');
	}
};

module.exports = me;
