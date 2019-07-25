
const kdo = require('kdo');
const caller = require('caller');
const expect = require('chai').expect;

const config = require('./config');
const request = require('./request');

const data = require('../data');
const apiInit = require('../api/init');

// types:
// 		'/bill/form/crud', // by api
// 		'Bill - Form - Crud', // by title
// 		'http://localhost:3000/bill/form/crud?formname=trader', // by url
const getApiUrlByTypeStr = (typeStr) => {

	// If the typeStr is a url, return it directly
	if (/^http[s]*:/i.test(typeStr)) { // url
		return typeStr;
	}

	let apiUrl;

	data.sysNames.find(sysName => {
		const defineJs = data.defineJs[sysName];
		const {api} = defineJs;

		const item = api.find(apiInfo => {
			const {api, title, url} = apiInfo;

			if (typeStr === api || typeStr === title) {
				apiUrl = url;
				return true;
			}
		});

		if (!!item) return true;
	});

	return apiUrl;
};

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
						const {io, test} = docInfo;

						// No test property and result property, no need to test
						if (!test && !io.result) return;

						// No verify property, can not test
						if (!test.verify) return;

						test.url = test.url || apiInfo.url;
						test.getResult = test.getResult || apiInfo.url;
						test.params = io.params;
						test.result = io.result;

						let {beforeDo, url, params, getResult, afterDo, verify} = test;

						it(apiInfo.title, async () => {
							let result;

							// Start app server via supertest and send data to it, then get the result.
							result = await request.do(url, params);

							// If there is a getResult property, use it. For example,
							// after deleting the data, user needs to re-acquire the data
							// to determine whether the operation is successful.
							if (getResult) {
								const url = getApiUrlByTypeStr(getResult);
								url && (result = await request.do(url));
							}

							// Use verify() to verify the result
							const isOK = verify(result, JSON.stringify(result));
							expect(isOK).to.be.true;
						});
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
