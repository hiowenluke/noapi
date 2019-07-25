
const kdo = require('kdo');
const caller = require('caller');
const expect = require('chai').expect;

const config = require('./config');
const request = require('./request');

const data = require('../data');
const apiInit = require('../api/init');

const flow = {
	initData({pathToCaller}) {
		data.getWebServiceRoot(pathToCaller);
		data.getTestRoot(pathToCaller);
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

					docInfos.forEach(docInfo => {
						const {io, test} = docInfo;
						test.url = test.url || apiInfo.url;
						test.getResult = test.getResult || apiInfo.url;
						test.params = io.params;
						test.result = io.result;

						it(apiInfo.title, async () => {
							let result;

							// Start app server via supertest and send data to it, then get the result.
							result = await request.do(test.url, test.params);

							// If user specifies a url to get the result, use it. For example,
							// after deleting the data, user needs to re-acquire the data
							// to determine whether the operation is successful.
							if (test.getResult) {
								result = await request.do(test.getResult);
							}

							// Use test.verify() to verify the result
							const isOK = test.verify(result, JSON.stringify(result));
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
