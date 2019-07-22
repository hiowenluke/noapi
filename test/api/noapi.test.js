
const expect = require('chai').expect;
const request = require('supertest');
const server = require('./res/01-basic/app');

describe('noapi()', () => {

	it('01-basic', async () => {
		const result = await request(server).get('/bill/form/crud?formname=trader');
		console.info(result.body);
		expect(result.body.success).to.be.true;
	});

	it('01-basic 2', async () => {
		const result = await request(server).get('/bill/form/crud?formname=trader');
		console.info(result.body);
		expect(result.body.success).to.be.true;
	});

});
