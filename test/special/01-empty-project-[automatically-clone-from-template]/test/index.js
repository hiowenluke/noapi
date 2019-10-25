
const request = require('supertest');
const expect = require('chai').expect;
const fx = require('fs-extra');

const server = require('..');
const req = request(server);

describe('#1', () => {
	it('test', async () => {
		const url = '/do/say/hi?name=Owen&age=100';
		const response = await req.get(url);
		const result = response.body;

		fx.removeSync('../api');
		fx.removeSync('../biz');

		expect(result.data.name === 'Owen' && result.data.age === 100).to.be.true;
	})
});
