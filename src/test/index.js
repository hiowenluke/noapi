
const kdo = require('kdo');
const caller = require('caller');
const expect = require('chai').expect;

const config = require('./config');

const data = require('../data');
const apiInit = require('../api/init');
const lib = require('./__lib');
const baa = require('./beforeAndAfter');

const createTestIt = require('./createTestIt');
const request = require('./createTestIt/request');

const flow = {
	initData({pathToCaller}) {
		data.initForTest(pathToCaller);
	},

	initConfig() {
		config.applyUserConfig();
	},

	initApiServices() {
		apiInit(true);
	},

	initRequest() {

		// Init request in describe instead of fn
		describe('Waiting for server ready...', function() {

			// Only affects this describe
			this.timeout(config.serverReadyTimeout * 1000);

			const delayStr = !config.waitTime ? '' : ` // +${config.waitTime}s delay`;
			it(`Done${delayStr}`, async () => {
				await request.init();
			});
		});
	},

	createDescribes() {
		const serviceNames = data.serviceNames;

		serviceNames.forEach(serviceName => {
			const title = serviceName === 'default' ? 'api' : serviceName;

			describe(title, () => {
				const sysName = data.serviceSysNames[serviceName];
				const defineJs = data.defineJs[sysName];
				const {api, docs} = defineJs;

				for (let i = 0; i < api.length; i ++) {
					const apiInfo = api[i];
					const docInfos = docs[i];

					if (!docInfos.length) {
						it('- No test', () => {});
						continue;
					}

					docInfos.forEach(docInfo => {
						const ioInfo = docInfo.io;
						const testInfo = docInfo.test;

						// No testInfo property and result property, no need to testInfo
						if (!testInfo && !ioInfo.result) return;

						// No verify property, can not testInfo
						if (!testInfo.verify) return;

						testInfo.testUrl = testInfo.url || apiInfo.url;
						testInfo.getResult = testInfo.getResult || apiInfo.url;

						createTestIt(apiInfo, ioInfo, testInfo);
					});
				}
			});
		});
	}
};

/** @name me.test */
const fn = () => {
	kdo.sync.do(flow, {pathToCaller: caller()});
};

module.exports = fn;
