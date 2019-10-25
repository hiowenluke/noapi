
const path = require('path');

const me = {
	apiServiceRoot: '',

	init(apiServiceRoot) {
		this.apiServiceRoot = apiServiceRoot;
	},

	getTemplatePath() {
		return path.resolve(__dirname, '../__template');
	},

	getApiPath() {
		return path.resolve(this.apiServiceRoot + '/api');
	},

	getBizPath() {
		return path.resolve(this.apiServiceRoot + '/biz');
	},

	getTestPath() {
		return path.resolve(this.apiServiceRoot + '/test');
	},

	getPackageJson() {
		return path.resolve(this.apiServiceRoot + '/package.json');
	}
};

module.exports = me;
