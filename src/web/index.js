
const kdo = require('kdo');
const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

const flow = {
	setCors() {

		// No 'Access-Control-Allow-Origin' header is present on the requested resource.
		// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue

		// use it before all route definitions
		const cors = require('cors');
		app.use(cors({origin: '*'}));
	},

	setPublic({options}) {
		if (options.public) { // options.public can be omitted

			if (typeof options.public === 'object') {

				// options.public = {path}, without name
				if (!options.public.name) {
					options.public.name = 'public';
				}

				// Use the root folder of project as public folder
				if (options.public.name === '/') {
					options.public.name = '';
				}
			}

			// If options.public is string, it is a path to public
			if (typeof options.public === 'string') {
				const pathToPublic = options.public;
				options.public = {
					name: 'public',
					path: pathToPublic,
				}
			}

			app.use('/' + (options.public.name || ''), express.static(options.public.path));
		}
	},

	setPostParser({options}) {

		// express 4.16+
		// https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters

		// Note that must be {extended: true}:
		// https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended

		app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies, eg: name=foo&color=red
		app.use(express.json()); // to support JSON-encoded bodies, eg: {"name":"foo","color":"red"}

		// for form-data, such as postman, file upload
		const multer = require('multer');
		const uploadFolder = options.uploadFolder || ''; // options.uploadFolder can be omitted
		app.use(multer({dest: uploadFolder}).any()); // app.use(multer()) can not be ommited

		// test
		// app.all('/test', (req, res) => {
		// 	res.send(JSON.stringify(req.body) + JSON.stringify(req.query));
		// });
	},

	setRoutes({options, routes}) {
		routes(app, options);
	},

	setListen({options}) {
		app.listen = () => {
			const {serverName, port} = options;
			server.listen(port, () => {
				console.log('%s server listening on port %d', serverName, port);
			});
		};
	},

	run() {
		app.listen();
	}
};

const fn = (options, routes) => {
	kdo.sync.do(flow, {options, routes});
	return {app, server};
};

module.exports = fn;
