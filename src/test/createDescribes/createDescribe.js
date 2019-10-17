
const v = require('voca');
const config = require('../config');
const createTestIt = require('../createTestIt');
const lib = require('../__lib');

const noTest = (title, url, params) => {
	const frontGroundYellow = '\x1b[33m';
	const prefix = frontGroundYellow + 'No test';

	if (title) {
		title = lib.attachParamsToTitle(title, url, params);
		title = prefix + ': ' + title;
	}

	it(title || prefix, () => {});
};

const validator = {
	isOnlyApi: false,
	regStartWith: null,
	regExclude: null,

	init(title, isOnlyApi, usedApis = []) {
		this.isOnlyApi = isOnlyApi;
		if (!isOnlyApi) return;

		if (title) {
			const startWithApi = this.formatRegStr(title);
			this.regStartWith = new RegExp('^' + startWithApi, 'i');
		}

		if (usedApis.length) {
			const excludeApis = usedApis.map(usedApi => {
				return this.formatRegStr(usedApi);
			});
			const excludeApisStr = '(' + excludeApis.join(')|(') + ')';
			this.regExclude = new RegExp('^' + excludeApisStr, 'i');
		}
	},

	formatRegStr(str) {
		return str
			.replace(/ /g, '')
			.replace(/^\S*?(?=\/)/, '')
			.replace(/\//g, '\\/')
		;
	},

	check(api) {
		if (!this.isOnlyApi) return true;
		return this.regStartWith.test(api) && (!this.regExclude || !this.regExclude.test(api));
	}
};

const fn = (title, defineJs, {isOnlyApi, usedApis} = {}) => {
	validator.init(title, isOnlyApi, usedApis);

	const {api, tests} = defineJs;
	describe(v.titleCase(title), function() {

		this.timeout(config.timeout);

		for (let i = 0; i < api.length; i ++) {
			const apiInfo = api[i];
			const testInfos = tests[i];

			if (!validator.check(apiInfo.api)) {
				continue;
			}

			if (!config.isValidTestCase(apiInfo)) {
				continue;
			}

			if (config.isIgnoreTest(apiInfo)) {
				continue;
			}

			if (!testInfos.length) {
				noTest(apiInfo.title);
				continue;
			}

			testInfos.forEach(info => {
				const ioInfo = info.io;
				const testInfo = info.test;

				// No testInfo property and result property, no need to test
				if (!testInfo && !ioInfo.result) return noTest(apiInfo.title, apiInfo.url, ioInfo.params);

				// No verify property, can not test
				if (!testInfo.verify) return noTest(apiInfo.title, apiInfo.url, ioInfo.params);

				createTestIt(apiInfo, ioInfo, testInfo);
			});
		}
	});
};

module.exports = fn;
