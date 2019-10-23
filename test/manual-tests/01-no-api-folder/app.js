
const options = {
	prompt: `
		-------------------------------------------
		The api and biz folder will be automatically created if they are not exist.
		Please visit http://localhost:3000/bill/form/crud, then the server should returns below:
		{
			"success": false, 
			"error": "No api corresponds to url /bill/form/crud"
		}
		-------------------------------------------
	`,
};

const server = require('../../../src')(options);
module.exports = server;
