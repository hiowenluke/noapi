
const request = require('supertest');
const config = require('../config');
const data = require('../../data');

let req;

const wait = (seconds = 1) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	})
};

const me = {
	init() {

		const init = async () => {

			// Initialize the server here instead of at the top of this file,
			// because it is now initialized and the correct webServiceRoot is obtained.
			const server = require(data.webServiceRoot);

			// Start the app server
			req = request(server);

			// Waiting for the server to be ready before test
			config.waitTime && await wait(config.waitTime);
		};

		// Init request in describe instead of fn
		describe('Waiting for server ready...', function() {

			// Only affects this describe
			this.timeout(config.serverReadyTimeout * 1000);

			const delayStr = !config.waitTime ? '' : ` // +${config.waitTime}s delay`;
			it(`Done${delayStr}`, async () => {
				await init();
			});
		});
	},

	async do(url, params) {

		// http://localhost:3000/xxx => /xxx
		url = url.replace(/(\w+):\/\/([^/:]+)(:\d*)?/, '');

		// Encode the url for unicode characters
		url = encodeURI(url);

		let result;

		params ?
			result = await req.post(url).send(params) :
			result = await req.get(url)
		;

		return result.body;
	}
};

module.exports = me;
