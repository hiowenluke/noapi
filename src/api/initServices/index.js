
// They are synchronous functions in this directory,
// so we need to use kdo.sync.flow instead fo kdo.flow.
/** @name me.initServices */
module.exports = require('kdo').sync.flow(module, 'options');
