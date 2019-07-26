
const caller = require('caller');
const config = require('./config');

const createDescribes = require('./createDescribes');
const request = require('./createTestIt/request');

const data = require('../data');
const apiInit = require('../api/init');

/** @name me.test */
const fn = () => {
	const pathToCaller = caller();

	data.initForTest(pathToCaller);

	// Load user custom config file and apply it
	config.applyUserConfig();

	// Load api services for testing
	apiInit(true);

	// Waiting for server ready when starting test
	request.init();

	// Create mocha describes
	createDescribes();
};

module.exports = fn;
