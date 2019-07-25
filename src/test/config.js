
const data = require('../data');

const me = {

	// Only run test cases with a title of the following values
	onlyTests: [
		// 'Bill - Form - Crud',
	],

	// Ignore test cases whose title is the following value
	ignoreTests: [
		// 'Info - Form - Crud // for goods',
	],

	// The time to wait for the server to be ready before test.
	// Applicable to the following situations:

	// 		When the app starts, it needs to perform asynchronous operations,
	// 		such as reading data from the database, just like await initDataBase().

	// 		Since the app is (and can only be) started with a synchronization function,
	// 		the SuperTest will instantly get the service object and then immediately post
	// 		the test data to the app. At this time, the app has not completed initialization,
	// 		and an error will occur.
	waitTime: 2,

	// The timeout (seconds) for waiting for server ready
	serverReadyTimeout: 60,

	applyUserConfig() {
		const userConfig = require(data.testRoot + '/config');
		Object.assign(this, userConfig);
	}
};

module.exports = me;
