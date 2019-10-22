
const server = require('../../../src')();

console.log(`
	The biz folder will be automatically created if it is not exists.
	Please visit http://localhost:3000/hello, then the server should returns below:
	{
		"success": false,
		"error": "The handler ./biz/hello.js does not exists."
	}
`.replace(/\n\t/g, '\n').replace(/\t/g, ' '.repeat(4)));

module.exports = server;
