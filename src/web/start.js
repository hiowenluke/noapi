
const kdo = require('kdo');
const {express, expressApp, app} = require('./app');

const http = require('http');
const httpServer = http.Server(expressApp);
const pub = require('./public');
const data = require('../data');

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

	setListen({options}) {
		expressApp.listen = () => {
			const {serverName, port, isSilence} = options;
			httpServer.listen(port, () => {
				if (isSilence || data.isTestMode) return;
				console.log('%s server listening on port %d', serverName, port);
			});
		};
	},

	run() {
		expressApp.listen();
	}
};

/** @name me.web.start */
const fn = () => {
	kdo.sync.do(flow, {options: data.serverOptions});

	httpServer.app = app;
	httpServer.express = express;
	httpServer.server = httpServer;

	return httpServer;
};

module.exports = fn;
