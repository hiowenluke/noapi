
const kdo = require('kdo');
const caller = require('caller');

const config = require('./config');
const createTestIt = require('./createTestIt');
const request = require('./createTestIt/request');

const data = require('../data');
const apiInit = require('../api/init');

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





	}
};

/** @name me.test */
const fn = () => {
	kdo.sync.do(flow, {pathToCaller: caller()});
};

module.exports = fn;
