
const runTestCase = require('.');
const parseDoingStr = require('./parseDoingStr');
const request = require('./request');
const config = require('../config');

const me = {
	async do(doingStrArr) {
		if (!doingStrArr || !doingStrArr.length) return;

		typeof doingStrArr === 'string' && (doingStrArr = [doingStrArr]);

		for (let i = 0; i < doingStrArr.length; i ++) {
			const doingStr = doingStrArr[i];
			const apiDefinition = parseDoingStr.forApiDefinition(doingStr);

			if (apiDefinition) {
				const {apiInfo, ioInfo = {}, testInfo = {}} =  apiDefinition;

				// Call another test case (including executing its beforeDo and afterDo).
				if (config.enableTestsChain) {
					await runTestCase.do(apiInfo, ioInfo, testInfo);
				}
				else {
					// Just request the test url with params.
					const testUrl = testInfo.url || apiInfo.url;
					const params = ioInfo.params;
					await request.do(testUrl, params);
				}
			}
			else {
				throw new Error(`Can't find apiInfo corresponding to "${doingStr}"`);
			}
		}
	},

	async beforeDo(...args) {
		await this.do(...args);
	},

	async afterDo(...args) {
		await this.do(...args);
	}
};

module.exports = me;
