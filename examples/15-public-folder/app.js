
// If there is a folder "./public", noapi will automatically load it as express static resources,
// and the url corresponds to it is http://localhost:3000/public .

// You can specify another folder such as "./web" or another name "http://localhost:3000/xxx" to replace it:
// See "16-set-public-folder" to learn more.

// So simple!
const server = require('../noapi')();

// Exports the http server for testing via supertest
module.exports = server;
