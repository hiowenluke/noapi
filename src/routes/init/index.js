
// They are all synchronous functions in this directory,
// so we need to use kdo.sync.flow instead fo kdo.flow.
module.exports = require('kdo').sync.flow(module, 'options');
