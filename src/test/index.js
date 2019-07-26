
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

	},





	}
};

/** @name me.test */
const fn = () => {
	kdo.sync.do(flow, {pathToCaller: caller()});
};

module.exports = fn;
