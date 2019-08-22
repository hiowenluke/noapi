
const caller = require('caller');
const config = require('./config');

const createDescribes = require('./createDescribes');
const request = require('./createTestIt/request');
const noapi = require('kdo')('..');

/** @name me.test */
const fn = (userConfig) => {

	// Load user custom config file and apply it
	config.applyUserConfig(userConfig);

	// Init noapi
	noapi.loader.init();
	noapi.api.init();
	noapi.biz.init();

	// Waiting for server ready when starting test
	request.init();

	// Create mocha describes
	createDescribes();
};

module.exports = fn;
