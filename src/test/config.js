
const fs = require('fs');
const data = require('../data');

const tools = {
	applyRuleArray(rules, apiInfo) {
		for (let i = 0; i < rules.length; i ++) {
			const rule = rules[i];
			const {api, title} = apiInfo;
			if (rule === api || rule === title) return true;

			// Process the * at the end of rule
			if (/\*$/.test(rule)) {
				const testStr = rule.replace(/\*$/, '');
				if (api.substr(0, testStr.length) === testStr || title.substr(0, testStr.length) === testStr) return true;
			}
		}

		return false;
	}
};

const me = {

	// Only run test cases which the api or title is the following values
	onlyTests: [
		// '/bill/form/crud', // <- verifying api
		// 'Bill - Form - Crud', // <- verifying title
	],

	// Ignore test cases which the api or title is the following values
	ignoreTests: [
		// '/info/form/crud', // <- verifying api
		// 'Info - Form - Crud // for goods', // <- verifying title
	],

	// If it is true, call other test cases which referred by beforeDo and afterDo.
	// Otherwise, just request the test url with params.
	enableTestsLink: false,

	// The timeout of mocha. Equal to:
	//		mocha --timeout=2000
	timeout: 2000,

	// Categorize the test cases if it is true
	catalogs: false,

	// The time to wait for the server to be ready before test.
	// Applicable to the following situations:

	// 		When the app starts, it needs to perform asynchronous operations,
	// 		such as reading data from the database, just like await initDataBase().

	// 		Since the app is (and can only be) started with a synchronization function,
	// 		the SuperTest will instantly get the service object and then immediately post
	// 		the test data to the app. At this time, the app has not completed initialization,
	// 		and an error will occur.
	waitSeconds: 0,

	// The timeout (seconds) for waiting for server ready
	serverReadyTimeout: 60,

	applyUserConfig(userConfig = {}) {
		let userConfigFile;

		const filename = data.testOptions.testRoot + '/config.js';
		if (fs.existsSync(filename)) {
			userConfigFile = require(filename);
		}

		Object.assign(this, userConfig, userConfigFile);
	},

	isValidTestCase(apiInfo) {
		const onlyTests = this.onlyTests;

		// If no onlyTests is specified, all test cases are legal
		if (!onlyTests || !onlyTests.length) return true;

		return tools.applyRuleArray(onlyTests, apiInfo);
	},

	isIgnoreTest(apiInfo) {
		const ignoreTests = this.ignoreTests;

		// If no ignoreTests is specified, all test cases are legal
		if (!ignoreTests || !ignoreTests.length) return false;

		return tools.applyRuleArray(ignoreTests, apiInfo);
	},
};

module.exports = me;
