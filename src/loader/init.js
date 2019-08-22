
const me = require('kdo')();

/** @name me.loader.init */
const fn = () => {
	me.initRootAndNames();
	me.loadCoreModules();
};

module.exports = fn;
