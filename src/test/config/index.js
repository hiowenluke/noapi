
const fs = require('fs');
const path = require('path');

const me = {

	// The path of user app (supertest needs it)
	userAppPath: '',

	// Tests file root directory (where the caller is located, such as <project root>/test/api)
	testsRootPath: '',

	// Specify test files
	onlyTests: [
		// '/calc/roughCapacityPlan/calc-*',
		// '/calc/bom/form/check/do',
	],

	// Files, folders to ignore
	ignoreTests: [
		'__lib',
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

	// Is it a file/folder to ignore?
	isIgnoreFile(filename) {
		return this.ignores.indexOf(filename) >= 0;
	},

	// Is it a test file?
	isTestFile(testFile) {
		return typeof testFile.verify === 'function';
	},

	// Is the test file legal?
	isValidTestFile(testFilePath) {
		const onlyTests = this.onlyTests;

		// If no only test files is specified, it is legal
		if (!onlyTests.length) return true;

		for (let i = 0; i < onlyTests.length; i ++) {
			const item = onlyTests[i];

			// Legal if it is the specified test file
			if (item === testFilePath) return true;

			// Support for use at the end * wildcard
			if (/\*$/.test(item)) {
				const testStr = item.replace(/\*$/, '');

				// Legal if it meets the specified * wildcard rule
				if (testFilePath.substr(0, testStr.length) === testStr) return true;
			}
		}

		return false;
	},

	// Fetch the path of user app
	fetchUserAppPath(pathToCaller) {
		let parentPath = pathToCaller;

		while(parentPath !== '/') {
			parentPath = path.resolve(parentPath, '../');

			const packageJson = parentPath + '/package.json';
			if (fs.existsSync(packageJson)) {
				const pkg = require(packageJson);
				const appJsFileName = pkg.main; // 'index.js' or 'app.js'

				this.userAppPath = path.resolve(packageJson, '../' + appJsFileName);
				break;
			}
		}
	},

	// Apply user-defined test case configuration
	applyUserConfig(pathToCaller) {

		// If caller is .../test/api/index.js, then the root path is .../test/api
		const testsRootPath = path.resolve(pathToCaller, '../');
		this.testsRootPath = testsRootPath;

		const userConfig = require(testsRootPath + '/config');
		Object.assign(this, userConfig);
	}
};

module.exports = me;
