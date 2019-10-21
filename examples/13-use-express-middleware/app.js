/*
	Noapi is based on Express, we can use all the middleware
	of Express or write our own express middleware.

	All middleware will be executed before noapi.
	For example:

	Visit the test url:
		http://localhost:3000/bill/form/crud?formName=trader

	You will see:
		1. The browser is waiting for response from server;
		2. The first middle will prints "do something..." in terminal;
		3. The second middle will waiting for 10 seconds;
		4. When times'up, the server will responses a result to the browser.
* */

// The app is an instance of express, "app = express()".
// The server is an instance of http.server, "server = http.createServer(...)".
// The express is expressJs itself.
const {app, server, express} = require('../noapi')();

const waitSeconds = (seconds) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	})
};

app.use(async (req, res, next) => {
	console.log('do something...');
	next();
});

app.use(async (req, res, next) => {
	const seconds = app.isTest ? 0 : 10;
	await waitSeconds(seconds);
	next();
});


// Exports the http server for testing via supertest
module.exports = server;
