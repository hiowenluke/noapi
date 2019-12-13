
const caller = require('caller');
const config = require('./config');

const data = require('./data');
const biz = require('./biz');
const server = require('./server');

const fn = (...args) => {
	config.init(caller(), args);

	data.init();
	biz.init();

	server.start();
};

module.exports = fn;
