
const http = require('http');

const config = require('../config');
const routes = require('./routes');

const done = (res, result) => {
	if (typeof result === 'undefined') {
		result = {success: false, error: "Internal Server Error"};
	}
	else if (result && result.error) {
		result = {success: false, error: result.error};
	}
	else {
		result = {success: true, data: result};
	}

	write(res, 'json', JSON.stringify(result));
};

const write = (res, type, str) => {
	const types = {
		json: 'application/json',
		html: 'text/html',
	};

	if (type === 'html' && !/^<html>/i.test(str)) {
		str = `<html><body>${str}</body></html>`;
	}

	res.writeHead(200, {'Content-Type': types[type], 'X-Powered-By': 'Noapi'});
	res.write(str);
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
			let [api, queryStr] = url.split('?');

			if (api === '/favicon.ico') {
				return done(res, null);
			}

			if (api === '/') {
				return done(res, 'Welcome to Noapi.');
			}

			const method = req.method.toLowerCase();
			if (method === 'post') {
				queryStr = await getQueryStr(req);
			}

			const result = await routes(api, queryStr);
			done(res, result);
		});


		const {name, host, port, isSilence} = config;
		server.listen(port, () => {
			if (isSilence) return;
			console.log(`Server ${name} running at http://${host}:${port}`);
		});
	}
};

module.exports = me;
