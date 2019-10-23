
const me = require('kdo')();

/** @name me.loader.init */
const fn = () => {
	me.initRootAndNames();
	me.fixFolders();
	me.loadCoreModules();
};

module.exports = fn;
