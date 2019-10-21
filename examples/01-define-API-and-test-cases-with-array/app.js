
// So simple!
const server = require('../noapi')();

// Exports the http server for testing via supertest
module.exports = server;

// For node.js veteran:
// 		The server is an instance of http.server.
// 		See https://nodejs.org/api/http.html#http_class_http_server to learn more.
