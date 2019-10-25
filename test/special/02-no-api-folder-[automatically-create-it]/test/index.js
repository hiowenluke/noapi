
const request = require('supertest');
const expect = require('chai').expect;
const fx = require('fs-extra');

const server = require('..');
const req = request(server);

describe('#2', () => {
	it('test', async () => {
		const url = '/hello';
		const error = 'No api corresponds to url /hello';

		const response = await req.get(url);
		const result = response.body;

		fx.removeSync('../api');

		expect(result.success === false && result.error === error).to.be.true;
	})
});
