
const data = require('../data');

const tools = {
	applyRuleArray(rules, apiTitle) {
		for (let i = 0; i < rules.length; i ++) {
			const rule = rules[i];
			if (rule === apiTitle) return true;

			// Process the * at the end of rule
			if (/\*$/.test(rule)) {
				const testStr = rule.replace(/\*$/, '');
				if (apiTitle.substr(0, testStr.length) === testStr) return true;
			}
		}

		return false;
	}
};

const me = {

	// Only run test cases with a title of the following values
	onlyTests: [
		// 'Bill - Form - Crud',
	],

	// Ignore test cases whose title is the following value
	ignoreTests: [
		// 'Info - Form - Crud // for goods',
	],

	//
	enableCatalogs: true,

	// The time to wait for the server to be ready before test.
	// Applicable to the following situations:

	// 		When the app starts, it needs to perform asynchronous operations,
	// 		such as reading data from the database, just like await initDataBase().

	// 		Since the app is (and can only be) started with a synchronization function,
	// 		the SuperTest will instantly get the service object and then immediately post
	// 		the test data to the app. At this time, the app has not completed initialization,
	// 		and an error will occur.
	waitTime: 0,

	// The timeout (seconds) for waiting for server ready
	serverReadyTimeout: 60,

	applyUserConfig() {
		const userConfig = require(data.testRoot + '/config');
		Object.assign(this, userConfig);
	},

	isValidTestCase(apiTitle) {
		const onlyTests = this.onlyTests;

		// If no onlyTests is specified, all test cases are legal
		if (!onlyTests || !onlyTests.length) return true;

		return tools.applyRuleArray(onlyTests, apiTitle);
	},

	isIgnoreTest(apiTitle) {
		const ignoreTests = this.ignoreTests;

		// If no ignoreTests is specified, all test cases are legal
		if (!ignoreTests || !ignoreTests.length) return false;

		return tools.applyRuleArray(ignoreTests, apiTitle);
	},
};

module.exports = me;
