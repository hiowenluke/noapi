/*
	Noapi is based on Express, we can write our own custom express routes.
	As same as middleware, any custom route will be executed before noapi.

	Try the test urls:
		http://localhost:3000/v1/test
		http://localhost:3000/bill/form/crud?formname=trader
 * */

// The app is an express app.
// The express is the express self.
const {app, server, express} = require('../..')();

const router = express.Router();
router.use('/test', (req, res, next) => {
	res.send('ok');
});

app.use('/v1', router);

// Exports the http server for testing via supertest
module.exports = server;
