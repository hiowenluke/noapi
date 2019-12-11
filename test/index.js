
const expect = require('chai').expect;
const example = require('./forExamples');

describe('Noapi', () => {

	it('examples/01-hello-world', async () => {
		const params = {name: 'owen', age: 100};
		const result = await example(1, '/say/hi', params);
		expect(result).to.be.true;
	});

	it('examples/02-with-api-folder', async () => {
		const params = {name: 'owen', age: 100};
		const result = await example(2, '/say/hi2', params);
		expect(result).to.be.true;
	});

	it('examples/03-get-url-parameters-via-query', async () => {
		const params = {name: "owen", obj: {"date":"2019-05-01"}, arr: [1,"abc",{"tel":12345678}]};
		const result = await example(3, '/foo/bar', params);
		expect(result).to.be.true;
	});

	it('examples/04-get-url-parameters-via-name', async () => {
		const params = {name: "owen", obj: {"date":"2019-05-01"}, arr: [1,"abc",{"tel":12345678}]};
		const result = await example(4, '/foo/bar', params);
		expect(result).to.be.true;
	});

	it('examples/05-return-error', async () => {
		const result = await example(5, '/do/somethingIsWrong');
		expect(result).to.be.true;
	});

	it('examples/06-public-folder', async () => {
		const result = await example(6, '/');
		expect(result).to.be.true;
	});
});
