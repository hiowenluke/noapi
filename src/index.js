
const caller = require('caller');
const me = require('kdo')();
const data = require('./data');

const noapi = (options = {}) => {
	if (typeof options === 'number') {
		options = {port: options};
	}

	me.data.init(caller(), options);

	me.loadCore();
	me.biz.init();
	me.api.init();

	noapi.biz = data.global.biz.do;
	return me.web.start();
};

module.exports = noapi;
