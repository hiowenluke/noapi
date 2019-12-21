
const http = require('http');

const config = require('../config');
const routes = require('./routes');

const welcome = (res) => {
	done(res, 'Welcome to Noapi.');
};

const done = (res, result) => {
	if (typeof result === 'undefined') {
		result = {success: false, error: "Internal Server Error"};
	}
	else if (result.error) {
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
			let [api, queryStr] = url.split('?');

			if (api === '/') {
				return welcome(res);
			}

			const method = req.method.toLowerCase();
			if (method === 'post' || !queryStr) {
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
