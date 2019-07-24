
const me = require('kdo').obj(module);

/** @name define.init */
const fn = (isTest) => {

	isTest ?
		me.parseDefineJs.forAll() :
		me.parseDefineJs.forApiInfos()
	;

	me.loadApisFromDefine();
};

module.exports = fn;
