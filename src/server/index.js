
const http = require('http');

const config = require('../config');
const routes = require('./routes');
const queryCache = require('./queryCache');

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
			const method = req.method.toLowerCase();
			let [api, queryStr] = url.split('?');
			let query;

			if (method === 'post' || !queryStr) {
				queryStr = await getQueryStr(req);
			}

			query = queryCache.get(queryStr);

			if (query && query.error) {
				done(res, query);
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
