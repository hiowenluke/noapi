
const kdo = require('kdo');
const {express, expressApp, app} = require('./app');

const http = require('http');
const httpServer = http.Server(expressApp);

const pub = require('./public');
const data = require('../data');
const lib = require('../__lib');

const flow = {
	setCors() {

		// No 'Access-Control-Allow-Origin' header is present on the requested resource.
		// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue

		// use it before all route definitions
		const cors = require('cors');
		expressApp.use(cors({origin: '*'}));
	},

	setPublic() {
		pub.init(express, expressApp);
	},

	setPostParser({options}) {

		// express 4.16+
		// https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters

		// Note that must be {extended: true}:
		// https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended

		expressApp.use(express.urlencoded({extended: true})); // to support URL-encoded bodies, eg: name=foo&color=red
		expressApp.use(express.json()); // to support JSON-encoded bodies, eg: {"name":"foo","color":"red"}

		// for form-data, such as postman, file upload
		const multer = require('multer');
		const uploadFolder = options.uploadFolder || ''; // options.uploadFolder can be omitted
		expressApp.use(multer({dest: uploadFolder}).any()); // app.use(multer()) can not be ommited

		// test
		// app.all('/test', (req, res) => {
		// 	res.send(JSON.stringify(req.body) + JSON.stringify(req.query));
		// });
	},

	setRoutes() {
		app.loadRoutes();
	},

	set404({options}) {
		const fn = (req, res, next) => {
			res.status(404);

			if (req.accepts('json')) {
				res.send({ error: 'Not found' });
			}
			else {
				res.type('txt').send('Not found');
			}
		};

		expressApp.use(options.err404 || fn);
	},

	set500() {
		expressApp.use((err, req, res, next) => {
			res.status(500);
			res.send('Internal Server Error');
		});
	},

	setListen({options}) {
		expressApp.listen = () => {
			const {name, port, isSilence} = options;
			httpServer.listen(port, () => {
				if (isSilence) return;
				console.log('Server %s is listening on port %d', name, port);
			});
		};
	},

	run() {
		expressApp.listen();
	}
};

/** @name me.web.start */
const fn = () => {
	kdo.doSync(flow, {options: data.serverOptions});

	httpServer.app = app;
	httpServer.express = express;
	httpServer.server = httpServer;

	return httpServer;
};

module.exports = fn;
