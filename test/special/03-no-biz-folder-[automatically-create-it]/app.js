
const options = {
	prompt: `
		-------------------------------------------
		The biz folder will be automatically created if it is not exists.
		But the biz file "./biz/hello.js" is not exists, so the server will returns an error.
		
		Please visit http://localhost:3000/hello, then the server should returns below:
		{
			"success": false,
			"error": "The handler ./biz/hello.js does not exists."
		}

		-------------------------------------------
		Before redo test, please remove the biz folder.
	`,
};

const server = require('../noapi')(options);
module.exports = server;
