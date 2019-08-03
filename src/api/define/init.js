
const data = require('../../data');
const me = require('kdo')();

/** @name define.init */
const fn = () => {

	data.isTestMode ?
		me.parseDefineJs.forTest() :
		me.parseDefineJs.forRun()
	;

	me.loadApisFromDefine();
};

module.exports = fn;
