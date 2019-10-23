
// In this test case, there are not api and biz directory.
// Noapi will clone them from template and print welcome messages in terminal.

const server = require('../noapi')();
module.exports = server;
