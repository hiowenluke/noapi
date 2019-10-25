
const request = require('supertest');
const expect = require('chai').expect;

const server = require('..');
const req = request(server);

describe('#4', () => {
	it('test', async () => {
		const expect1 = await (async () => {
			const url = '/hello';
			const response = await req.get(url);
			const result = response.body;
			return result.data === "Hello world!";
		})();

		const expect2 = await (async () => {
			const url = '/hi';
			const response = await req.get(url);
			const result = response.body;
			return result.success === false;
		})();

		expect(expect1 && expect2).to.be.true;
	})
});
