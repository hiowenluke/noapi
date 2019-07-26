
const config = require('../config');
const data = require('../../data');
const createTestIt = require('../createTestIt');

const fn = (title, sysName) => {
	describe(title, () => {
		const defineJs = data.defineJs[sysName];
		const {api, docs} = defineJs;

		for (let i = 0; i < api.length; i ++) {
			const apiInfo = api[i];
			const docInfos = docs[i];

			if (!config.isValidTestCase(apiInfo.title)) {
				continue;
			}

			if (!docInfos.length) {
				it('- No test', () => {});
				continue;
			}

			docInfos.forEach(docInfo => {
				const ioInfo = docInfo.io;
				const testInfo = docInfo.test;

				// No testInfo property and result property, no need to test
				if (!testInfo && !ioInfo.result) return;

				// No verify property, can not test
				if (!testInfo.verify) return;

				testInfo.testUrl = testInfo.url || apiInfo.url;
				testInfo.getResult = testInfo.getResult || apiInfo.url;

				createTestIt(apiInfo, ioInfo, testInfo);
			});
		}
	});
};

module.exports = fn;
