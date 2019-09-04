
const runTestCase = require('.');
const parseDoingStr = require('./parseDoingStr');

const me = {
	async do(doingStrArr) {
		if (!doingStrArr || !doingStrArr.length) return;

		typeof doingStrArr === 'string' && (doingStrArr = [doingStrArr]);

		for (let i = 0; i < doingStrArr.length; i ++) {
			const doingStr = doingStrArr[i];
			const apiDefinition = parseDoingStr.forApiDefinition(doingStr);

			if (apiDefinition) {
				const {apiInfo, ioInfo, testInfo} =  apiDefinition;
				await runTestCase.do(apiInfo, ioInfo, testInfo);
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
