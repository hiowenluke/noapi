
const expect = require('chai').expect;

const lib = require('../__lib');
const runTestCase = require('../runTestCase');

const fn = (apiInfo, ioInfo, testInfo) => {
	const {title, url} = apiInfo;
	const {verify} = testInfo;
	const {params} = ioInfo;

	const testCaseTitle = lib.attachParamsToTitle(title, url, params);

	it(testCaseTitle, async () => {
		const result = await runTestCase.do(apiInfo, ioInfo, testInfo);
		const extraData = Array.isArray(result) ? result.map(item => item.data) : JSON.stringify(result);
		const isOK = verify(result, extraData);

		!isOK && console.log('Result:', result);
		expect(!!isOK).to.be.true;
	});
};

module.exports = fn;
