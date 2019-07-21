
const kdo = require('kdo');
const caller = require('caller');

const config = require('./config');
const createTests = require('./createTests');
const request = require('./createTests/createTest/request');

const fn = () => {
	const pathToCaller = caller();
	config.fetchUserAppPath(pathToCaller);
	config.applyUserConfig(pathToCaller);

	// Init request in describe instead of fn
	describe('Waiting for server ready...', function() {

		// Only affects this describe
		this.timeout(60 * 1000);

		it(`Done // +${config.waitTime} second(s) delay`, async () => {
			await request.init();
		});
	});

	// Simulate index.js as module.filename for kdo
	// Require the root path as an object via kdo
	const module = {filename: config.testsRootPath + '/index.js'};
	const testsDir = kdo.obj(module);

	// Test directory definition
	const catalogs = config.catalogs;

	// ----------------------------------------------------------
	// Get the primary test directory from the test directory (root path) definition
	// For example, the api and test directory structure in api-mms is as follows:

	// /api
	//		/calc
	//			/bom
	//				/form
	//					getData.js
	//					/saveData
	//						...
	//				/list
	//		/info
	//			/calendar

	// /test
	//		/api			<- testsDir
	//			/calc			<- catalog
	//				/bom			<- moduleName
	//					/form			<- testFiles
	//						getData.js		<- testFile
	//						/saveData
	//							...
	//					/list
	//			/info
	//				/calendar
	//			index.js		<- caller

	// ----------------------------------------------------------

	Object.keys(catalogs).forEach(catalogName => { // calc

		// Modules in the current directory, such as bom
		const catalog = testsDir[catalogName];
		if (!catalog) return;

		// Create test cases for each module
		Object.keys(catalog).forEach(moduleName => { // bom

			// The directory under the current module, such as
			// the form directory under the bom, the list directory

			// All the test files in the directory have been loaded as objects,
			// such as bom/form/getData.js, which corresponds to testFiles.form.getData
			const testFiles = catalog[moduleName];

			// Get the module title from the module definition
			const topic = catalogs[catalogName][moduleName]; // calc/bom => "calc - Bom"

			// Create a test case set for mocha
			describe(topic, () => {

				// The root path is caller, such as .../test/api/,
				// so the full path is .../test/api/<catalogName>/<moduleName>
				const modulePath = `/${catalogName}/${moduleName}`;

				// Create mocha test cases for each test case file in testFiles
				createTests(testFiles, modulePath);
			});
		});
	});
};

module.exports = fn;
