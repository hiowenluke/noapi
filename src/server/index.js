
const http = require('http');

const config = require('../config');
const routes = require('./routes');
const parseQueryStr = require('./parseQueryStr');

const welcome = (res) => {
	res.write('Welcome to Noapi.');
	res.end();
};

const done = (res, result) => {
	if (result.error) {
		result = {success: false, error: result.error};
	}
	else {
		result = {success: true, data: result};
	}

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify(result));
	res.end();
};

const getQueryStr = (req) => {
	return new Promise(resolve => {
		let str = '';

		req.on('data', (chunk) => {
			str += chunk;
		});

		req.on('end',()=>{
			resolve(str);
		});
	})
};

const me = {
	start() {
		const server = new http.Server();
		server.on('request',async (req, res) => {
			const url = req.url;

			if (url === '/') {
				return welcome(res);
			}

			let [api, queryStr] = url.split('?');
			let query;

			const method = req.method.toLowerCase();
			if (method === 'post' || !queryStr) {
				queryStr = await getQueryStr(req);
			}

			query = parseQueryStr.do(queryStr);

			if (query && query.error) {
				return done(res, query);
			}

			const result = await routes(api, query);
			done(res, result);
		});


		const {name, port, isSilence} = config;
		server.listen(port, () => {
			if (isSilence) return;
			console.log('Server %s is listening on port %d', name, port);
		});
	}
};

module.exports = me;
