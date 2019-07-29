
const me = require('kdo')();

/** @name define.init */
const fn = (isTest) => {

	isTest ?
		me.parseDefineJs.forTest() :
		me.parseDefineJs.forRun()
	;

	me.loadApisFromDefine();
};

module.exports = fn;
