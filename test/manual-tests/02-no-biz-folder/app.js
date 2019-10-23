
const options = {
	prompt: `
		-------------------------------------------
		The biz folder will be automatically created if it is not exists.
		Please visit http://localhost:3000/hello, then the server should returns below:
		{
			"success": false,
			"error": "The handler ./biz/hello.js does not exists."
		}
		-------------------------------------------
	`,
};

const server = require('../../../src')(options);
module.exports = server;
