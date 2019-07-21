
const request = require('./request');

const me = {
	async __doUrls(urls) {
		if (!urls) return;

		// 单个 url 字符串转为数组
		typeof urls === 'string' && (urls = [urls]);

		for (let i = 0; i < urls.length; i ++) {
			const url = urls[i];
			await request.do(url);
		}
	},

	async beforeDo(urls) {
		await this.__doUrls(urls);
	},

	async afterDo(urls) {
		await this.__doUrls(urls);
	}
};

module.exports = me;
