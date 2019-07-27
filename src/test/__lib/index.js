
// Use __proto__ to avoid circular references
module.exports.__proto__ = require('kdo').obj(module);
