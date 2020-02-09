
const http = require('http');

const config = require('../config');
const routes = require('./routes');
const processPublic = require('./public');

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

const getErrorMessages = (arr) => {
	const messages = [];

	arr.forEach(a => {
		if (a.substr(0, 7 ) !== '    at ') {
			messages.push(a);
		}
	});

	return messages;
};

const me = {
	start() {
		const server = new http.Server();
		server.on('request',async (req, res) => {
			const url = req.url;
			let [api, queryStr] = url.split('?');

			if (config.enablePublic) {
				const done = processPublic(api, res);
				if (done) return;
			}
			else {
				if (api === '/favicon.ico') {
					return done(res, null);
				}

				if (api === '/') {
					return done(res, 'Welcome to Noapi.');
				}
			}

			const method = req.method.toLowerCase();
			if (method === 'post') {
				queryStr = await getQueryStr(req);
			}

			try {
				let result = await routes(api, queryStr);

				if (result && result.error) {
					!config.isSilence && console.log(result.error);
				}

				done(res, result);
			}
			catch(e) {
				const onerror = config.onerror;
				!config.isSilence && console.log(e);

				if (onerror === 0) {
					done(res);
				}
				else {
					const arr = e.stack.split('\n');

					// print error message with stack 1
					if (onerror === 1) {
						const messages = getErrorMessages(arr);
						const message = messages.join('\n');
						let script = arr.find(a => a.substr(0, 7) === '    at ');
						script = script
							.replace('    at fn (', '')
							.replace(config.webServiceRoot, '.')
							.replace(/\)$/, '')
						;
						done(res, {error: {message, script}});
					}
					else {
						// print full error stack
						let str = arr.join('<br/>');
						str = str.replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
						write(res, 'html', str);
					}
				}
			}
		});

		const {name, host, port, isSilence} = config;
		server.listen(port, () => {
			if (isSilence) return;
			console.log(`Server ${name} running at http://${host}:${port}`);
		});
	}
};

module.exports = me;
