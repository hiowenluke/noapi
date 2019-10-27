
// If there is a folder "public" under the root of project, it will be loaded as a express static resource.
//		1. If a path was specified as "xxx", the url corresponds to it is http://localhost:3000/xxx .
//		2. If no path was specified, the url corresponds to it is http://localhost:3000 .

// You can specify another folder such as "web" to replace it.
// See "16-set-public-folder" to learn more.

// So simple!
const server = require('../noapi')();

// Exports the http server for automatically testing via supertest
module.exports = server;
