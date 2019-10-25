
const options = {
	prompt: `
		-------------------------------------------
		If the project is empty (no api and biz folders), Noapi will automatically clone them from template.
		Please visit http://localhost:3000/do/say/hi?name=Owen&age=100, then the server should returns below:
		{
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
				"name": "Owen",
				"age": 100
			}
		}
		
		-------------------------------------------
		Before redo test, please remove the api and biz folders.
	`,
};

const server = require('../noapi')(options);
module.exports = server;
