
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

const me = {
	start() {
		const server = new http.Server();
		server.on('request',async (req, res) => {
			const url = req.url;

			const query = queryCache.getByUrl(url);
			if (query && query.error) {
				done(res, query);
			}

			const api = url.split('?')[0];
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
