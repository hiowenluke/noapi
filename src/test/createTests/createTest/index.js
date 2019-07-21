
const expect = require('chai').expect;
const request = require('./request');
const baa = require('./beforeAndAfter');

// Create mocha test case
const fn = (module) => {
	const {title, url, resultUrl, before, after, forError, comparisonData, isValidTest} = module;
	if (isValidTest && !isValidTest(module)) return;

	it(title, async () => {

		let resultText;

		// Do something before request url
		await baa.beforeDo(before);

		// Start app server via supertest and send data to it, then get the resultText.
		resultText = await request.do(url);

		// If there is an error and the current test case is not to
		// test the error returned by the server, then the test fails
		const errorText = JSON.parse(resultText).error;
		if (errorText && !forError) {
			console.log("Error:", `${title}:`, errorText);
			return expect(false).to.be.true;
		}

		// If user specifies a url to get the result, use it. For example,
		// after deleting the data, user needs to re-acquire the data
		// to determine whether the operation is successful.
		resultUrl && (resultText = await request.do(resultUrl));

		// Note that it must be executed before expect(). If it is placed last,
		// subsequent actions will not be executed after the test case fails.
		await baa.afterDo(after);

		// If the result is ok, verify it.
		// Use .verify() instead of verify() for "this" in verify function.
		const isOK = module.verify(resultText, comparisonData);
		expect(isOK).to.be.true;
	});
};

module.exports = fn;
