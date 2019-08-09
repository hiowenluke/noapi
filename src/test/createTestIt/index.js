
const expect = require('chai').expect;

const request = require('./request');
const baa = require('./beforeAndAfter');
const lib = require('../__lib');

const fn = (apiInfo, ioInfo, testInfo) => {
	const {api, title, url} = apiInfo;
	const {beforeDo, testUrl, getResult, afterDo, verify} = testInfo;
	const {params} = ioInfo;

	const testCaseTitle = lib.attachParamsToTitle(title, url, params);
	it(testCaseTitle, async () => {
		let result;

		// Call specific apis before do with test url if needed.
		// E.g., insert some data to db before do with test url.
		// The beforeDo can be an array, or an api, title, url, or some other specified property.
		if (beforeDo) {
			await baa.beforeDo(beforeDo);
		}

		// Start app server via supertest and send data to it, then get the result.
		result = await request.do(testUrl, params);

		// If there is a getResult property, use it. For example,
		// after deleting the data, user needs to re-acquire the data
		// to determine whether the operation is successful.
		
		// Note that the getResult can not be api, title, or url, otherwise
		// the getResult will cause repeat do the url, and maybe get a wrong result.
		if (getResult && (getResult !== api && getResult !== title && getResult !== url)) {
			const apiUrl = lib.getApiUrlByTypeStr(getResult);
			apiUrl && (result = await request.do(apiUrl));
		}

		// Call specific apis after get the test result if needed.
		// E.g., delete the inserted data in before.
		// The usage is the same as beforeDo.
		if (afterDo) {
			await baa.afterDo(afterDo);
		}

		// Use verify() to verify the result
		const isOK = verify(result, JSON.stringify(result));
		expect(isOK).to.be.true;
	});
};

module.exports = fn;
