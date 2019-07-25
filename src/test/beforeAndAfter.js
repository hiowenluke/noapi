
const request = require('./request');
const lib = require('./__lib');

const me = {
	async do(typeStrArr) {
		if (!typeStrArr) return;

		typeof typeStrArr === 'string' && (typeStrArr = [typeStrArr]);

		for (let i = 0; i < typeStrArr.length; i ++) {
			const typeStr = typeStrArr[i];
			const apiUrl = lib.getApiUrlByTypeStr(typeStr);
			await request.do(apiUrl);
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
