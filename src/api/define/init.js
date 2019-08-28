
const data = require('../../data');
const me = require('kdo')();

/** @name define.init */
const fn = () => {

	data.isTestMode ?
		me.parseDefineJs.forTesting() :
		me.parseDefineJs.forRunning()
	;

	me.loadApisFromDefine();
};

module.exports = fn;
