
const request = require('./request');
const baa = require('./beforeAndAfter');
const parseDoingStr = require('./parseDoingStr');

// Two Forms:
// 		runTestCase.do(api) <= Calls from beforeDo and afterDo
//		runTestCase.do(apiInfo, ioInfo, testInfo) <= Calls from createTestIt
/** @name runTestCase */
const me = {
	async do(apiInfo, ioInfo = {}, testInfo = {}) {
		try {

			// Set the default value of "testUrl" and "getResult" properties with url
			testInfo.testUrl = testInfo.url || apiInfo.url;
			testInfo.getResult = testInfo.getResult || apiInfo.url;

			const {title, url} = apiInfo;
			const {beforeDo, testUrl, getResult, afterDo} = testInfo;
			const {params} = ioInfo;

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
				const url = parseDoingStr.forTestUrl(getResult);
				if (url) {
					result = await request.do(url, params)
				}
			}

			// Call specific apis after get the test result if needed.
			// E.g., delete the inserted data in before.
			// The usage is the same as beforeDo.
			if (afterDo) {
				await baa.afterDo(afterDo);
			}

			return result;
		}
		catch(e) {
			console.log(e);
		}
	}
};

module.exports.__proto__ = me;
