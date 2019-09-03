
const runTestCase = require('.');
const getApiInfoByDoingStr = require('./getApiInfoByDoingStr');

const me = {
	async do(doingStrArr) {
		if (!doingStrArr || !doingStrArr.length) return;

		typeof doingStrArr === 'string' && (doingStrArr = [doingStrArr]);

		for (let i = 0; i < doingStrArr.length; i ++) {
			const doingStr = doingStrArr[i];
			const {api} = getApiInfoByDoingStr(doingStr);

			if (!api) {
				console.log(`Can't find the api corresponding to "${doingStr}"`);
			}
			else {
				await runTestCase.do(api);
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
