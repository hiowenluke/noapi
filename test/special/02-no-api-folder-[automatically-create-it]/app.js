
const options = {
	prompt: `
		-------------------------------------------
		The api folder will be automatically created if it is not exists.
		But the api "/hello" is not exists, so the server will returns an error.
		
		Please visit http://localhost:3000/hello, then the server should returns below:
		{
			"success": false,
			"error": No api corresponds to url /hello."
		}
		
		-------------------------------------------
		Before redo test, please remove the api folder.
	`,
};

const server = require('../noapi')(options);
module.exports = server;
