
const caller = require('caller');
const me = require('kdo')({exclude: 'test'});
const data = require('./data');

const createNoapiDo = () => {
	// Add shortcut for data.global.api.do
	noapi.do = data.global.api.do;
};

const noapi = (options = {}) => {
	options.pathToCaller = caller();
	me.data.init(options);

	me.api.init();
	me.biz.init();

	createNoapiDo();

	return me.web.start();
};

noapi.test = (userConfig) => {
	const pathToCaller = caller();
	data.initForTest(pathToCaller);

	const test = require('./test');
	test(userConfig);
};

noapi.params = me.utils.params;
noapi.url = me.utils.url;

module.exports = noapi;
