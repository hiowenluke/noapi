
const v = require('voca');
const config = require('../config');
const createTestIt = require('../createTestIt');
const lib = require('../__Lib');

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
	isOnlyApiPath: false,
	regStartWith: null,
	regExclude: null,

	init(title, isOnlyApiPath, usedApiPaths = []) {
		this.isOnlyApiPath = isOnlyApiPath;
		if (!isOnlyApiPath) return;

		if (title) {
			const startWithApiPath = this.formatRegStr(title);
			this.regStartWith = new RegExp('^' + startWithApiPath, 'i');
		}

		if (usedApiPaths.length) {
			const excludeApiPaths = usedApiPaths.map(usedApiPath => {
				return this.formatRegStr(usedApiPath);
			});
			const excludeApiPathsStr = '(' + excludeApiPaths.join(')|(') + ')';
			this.regExclude = new RegExp('^' + excludeApiPathsStr, 'i');
		}
	},

	formatRegStr(str) {
		return str
			.replace(/ /g, '')
			.replace(/^\S*?(?=\/)/, '')
			.replace(/\//g, '\\/')
		;
	},

	check(apiPath) {
		if (!this.isOnlyApiPath) return true;
		return this.regStartWith.test(apiPath) && (!this.regExclude || !this.regExclude.test(apiPath));
	}
};

const fn = (title, defineJs, {isOnlyApiPath, usedApiPaths} = {}) => {
	validator.init(title, isOnlyApiPath, usedApiPaths);

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

				testInfo.testUrl = testInfo.url || apiInfo.url;
				testInfo.getResult = testInfo.getResult || apiInfo.url;

				createTestIt(apiInfo, ioInfo, testInfo);
			});
		}
	});
};

module.exports = fn;
