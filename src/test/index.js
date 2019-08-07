
const caller = require('caller');
const config = require('./config');

const createDescribes = require('./createDescribes');
const request = require('./createTestIt/request');
const apiInit = require('../api/init');

/** @name me.test */
const fn = (userConfig) => {

	// Load user custom config file and apply it
	config.applyUserConfig(userConfig);

	// Load api services for testing
	apiInit();

	// Waiting for server ready when starting test
	request.init();

	// Create mocha describes
	createDescribes();
};

module.exports = fn;
