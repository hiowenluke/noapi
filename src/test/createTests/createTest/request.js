
const request = require('supertest');
const config = require('../../config');

let req;

const wait = (seconds = 1) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	})
};

const me = {
	async init() {

		// Initialize the server here instead of at the top of this file,
		// because it is now initialized and the correct userAppPath is obtained.
		const server = require(config.userAppPath);

		// Start the app server
		req = request(server);

		// Waiting for the server to be ready before test
		config.waitTime && await wait(config.waitTime);
	},

	async do(url) {

		// !req && await this.init();

		// http://localhost:3000/xxx => /xxx
		url = url.replace(/(\w+):\/\/([^/:]+)(:\d*)?/, '');

		// Encode the url for unicode characters
		url = encodeURI(url);

		const result = await req.get(url);
		return JSON.stringify(result.body);
	}
};

module.exports = me;
