
const me = {

	// Only run test cases with a title of the following values.
	onlyTests: [

	],

	// Ignore test cases whose title is the following value.
	ignoreTests: [

	],

	// Categorize the test cases
	catalogs: false,

	// The timeout of mocha. Equal to:
	//		mocha --timeout=2000
	timeout: 2000,

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
};

module.exports = me;
