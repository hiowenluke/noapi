
const me = `
	---------------------------------------
	Welcome to Noapi!
	---------------------------------------
	You created an empty project, so Noapi ran a demo project now.
	Please do the follow steps to experience Noapi.
	
	1. Run
	   1) Visit http://localhost:3000/do/say/hi?name=Owen&age=100 in your browser.
	   2) The server will returns result like below:
		  {"success": true, "data": {"msg": "Hi, I'm Owen, 100 years old.", "name": "Owen", "age": 100}}
	
	2. Test
	   1) Press Ctrl + C to quit the demo project.
	   2) Modify index.js as below:
	      const server = require('noapi')();
	      module.exports = server;
	      
	   3) Install packages which test required:
		  npm install chai mocha supertest --save-dev
	   	  
	   4) Run tests:
		  npm test

	3. Learn
	   1) Open ./api/define.js, you can see the api "/do/say/hi" is defined in it.
	   2) Open ./biz/do/say/hi.js, this biz file is the handler of api "/do/say/hi".
	   3) Read the biz files (js file under biz folder), learn how Noapi works.
	
	
	---------------------------------------
	Startup your great project
	---------------------------------------
	Tinker with things and make it your own:
	
	1. Modify the ./api/define.js to define your APIs (and test cases).
	2. Create the biz files to corresponds to your APIs.
	3. Write your business code in the biz files.
	
	Enjoy!
	---------------------------------------
`;

module.exports = me;
