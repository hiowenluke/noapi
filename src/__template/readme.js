
const me = `
	---------------------------------------
	Welcome to Noapi!
	---------------------------------------
	You created an empty project, so Noapi ran a demo project now.
	Please do the follow steps to experience Noapi.
	
	1. Run
	   1) Copy the url http://localhost:3000/do/say/hi?name=Owen&age=100
	   2) Past it to your favorite browser, then press Enter.
	   3) Then the server will returns result like below:
		  {
				"success": true,
				"data": {
					"msg": "Hi, I'm Owen, 100 years old."
				}
		  }
	
	2. Read
	   1) Open ./api/define.js, you can see the api "/do/say/hi" is defined in it.
	   2) Open ./biz/do/say/hi.js, this biz file is the handler of api "/do/say/hi".
	   3) Read the biz file, learn how Noapi works.
	
	3. Test
	   1) Press Ctrl + C to quit the demo project first.
	   2) Execute the below command to install packages which test required:
		  npm install chai mocha supertest --save-dev
	   	  
	   3) Execute the below command to automatically run tests:
		  npm test
	
	So easy, right? Enjoy it.   	
	---------------------------------------
`;

module.exports = me;
