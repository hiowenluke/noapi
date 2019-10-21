
// So simple!
const server = require('../noapi')();

// Exports the http server for testing via supertest
module.exports = server;

// For node.js veteran:
// 		The server is an instance of http.server.
// 		See below documentations to learn more:
//		https://nodejs.org/api/http.html#http_class_http_server

// Further more, we can get app, server, express like below:
// 		const {app, server, express} = require('../noapi')();

// 		The app is an instance of express.
//		The express is expressJs itself.
//		The server is an instance of http.server.

//		See below examples to learn more:
//		./examples/13-use-express-middleware/app.js
//		./examples/14-custom-express-route/app.js
