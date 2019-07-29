
const fs = require('fs');
const path = require('path');

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

	core: {}, // {aha, api, biz} // See "data.demo.js" to learn more
	defineJs: {}, // {default: {filename, api, io, test}} // See "data.demo.js" to learn more

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
	},

	initForTest(pathToCaller) {
		this.webServiceRoot = tools.getWebServiceRoot(pathToCaller);
		this.isTestMode = true;

		// If pathToCaller is .../test/api/index.js, then the root path of test is .../test/api
		this.testRoot = path.resolve(pathToCaller, '../');
	}
};

module.exports = me;
