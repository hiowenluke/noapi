
// The express is Express, app = express()
const {app, express} = require('../noapi')();

app.use(async (req, res, next) => {
	console.log('do something...');
	next();
});

// The middleware will be executed twice if you request the url from browser.
// This is because the browser sent another request asking for a favicon.

// You could easily check this by making request using curl:
// 		curl http://localhost:3000
//
// Then the middleware will only run once.
