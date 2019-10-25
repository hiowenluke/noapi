
const request = require('supertest');
const expect = require('chai').expect;
const fx = require('fs-extra');

const server = require('..');
const req = request(server);

describe('#3', () => {
	it('test', async () => {
		const url = '/hello';
		const error = 'The handler ./biz/hello.js does not exists.';

		const response = await req.get(url);
		const result = response.body;

		fx.removeSync('../biz');

		expect(result.success === false && result.error === error).to.be.true;
	})
});
