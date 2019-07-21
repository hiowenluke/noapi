
const config = require('../config');
const createTest = require('./createTest');

// Create a test case set for mocha
const fn = (testFiles, path = '') => {

	Object.keys(testFiles).forEach(filename => {
		const testFile = testFiles[filename];
		const thisPath = path + '/' + filename;

		// Ignore the specified file (if any)
		if (config.isIgnoreFile(filename)) return;

		// If it is a test script, create a test
		if (config.isTestFile(testFile)) {

			// Ignore if it is not a legal test file
			if (!config.isValidTestFile(thisPath)) return;

			// If the script specifies multiple test cases, create them one by one
			if (testFile.tests) {
				testFile.tests.forEach(test => { // {title, url, comparisonData}
					Object.assign(testFile, test); // Attach the attributes in test on testFile
					createTest(testFile);
				});
			}
			else {
				// Single test case
				createTest(testFile);
			}
		}

		// Recursive processing if it is a directory object
		else if (typeof testFile === 'object') {
			fn(testFile, thisPath);
		}
	});
};

module.exports = fn;
