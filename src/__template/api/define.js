
// Define APIs and test cases with array.
// See the end of this file for more details.

const me = [

	// /////////////////////////////////////////////
	//
	// 1. Basic definition
	//
	// /////////////////////////////////////////////

	// Use "api" and "params" properties.
	// Please read "/<project>/biz/do/say/hi.js" to learn more.
	// 		Tips: The biz file path rule is "/<project>/biz" + api.
	{
		// Define the API (it is so simple even if it is a multi-level api path)
		api: '/do/say/hi',

		// Define input (the parameters name which the API accepted)
		params: {
			name: 'Owen', // param "name" with demo value
			age: 100, // param "age" with demo value
		},

		// Define output (test case, the expected result returned from the server in testing)
		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
				"name": "Owen",
				"age": 100
			}
		}
	},

	// Use demo "url" property (as same as previous).
	// Please read "/<project>/biz/do/say/hi.js" to learn more.
	{
		// You can just specify a demo url including the api and parameters,
		// click it in your editor and view the result in your browser, so convenient.
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
				"name": "Owen",
				"age": 100
			}
		}
	},

	// Pass the parameters via query to the handler.
	// Please read "/<project>/biz/do/say/hi2.js" to learn more.
	{
		url: 'http://localhost:3000/do/say/hi2?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]',

		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
				"obj": {
					"date": "2019-05-01"
				},
				"arr": [
					1,
					"abc",
					{
						"tel": 12345678
					}
				]
			}
		}
	},

	// Pass the parameters name directly to the handler (as same as previous).
	// Please read "/<project>/biz/do/say/hi3.js" to learn more.
	{
		url: 'http://localhost:3000/do/say/hi3?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]',

		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
				"obj": {
					"date": "2019-05-01"
				},
				"arr": [
					1,
					"abc",
					{
						"tel": 12345678
					}
				]
			}
		}
	},

	// Return an error message
	{
		url: 'http://localhost:3000/do/somethingIsWrong',
		result: {
			"success": false,
			"error": "something is wrong"
		}
	},


	// /////////////////////////////////////////////
	//
	// 2. Define test case with "test" property
	//	  It can be an object, a string, a boolean, a regExp, or a function.
	//
	// 	  The difference between "test" and "result" properties:
	// 	  1) The "result" requires the server to return the same data as result.
	//	  	 See the #27 line above for result.data.
	//
	// 	  2) The "test" only checks the specified properties of result:
	//		 a) If the test is true or false, it is for checking the state of result (result.success).
	//		 b) Otherwise, it is for checking the data of result (result.data).
	//
	// /////////////////////////////////////////////

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Expected {name: "Owen"} in result.data
		test: {
			name: 'Owen',
		},

		// Equal to:
		// 		test: {
		// 			verify: {
		// 				name: 'Owen',
		// 			}
		// 		}
	},

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Expected `{"name":"Owen"}` in the json string of result
		test: `"name":"Owen"`,

		// Equal to:
		// 		test: {
		// 			verify: `"name":"Owen"`,
		// 		}
	},

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Expected "name" or "age" in the json string of result
		test: /(name)|(age)/,

		// Equal to:
		// 		test: {
		// 			verify: /(name)|(age)/,
		// 		}
	},

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Expect result.success to be true
		test: true,

		// Equal to:
		// 		test: {
		// 			verify: true,
		// 		}
	},

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Define the test() function to check result
		test(result, resultJson) {

			// Find the specified values in the result object
			return result.data.name === 'Owen';
		},

		// Equal to:
		// 		test: {
		// 			verify(result, resultJson) {
		// 				return result.data.name === 'Owen';
		// 			}
		// 		}
	},

	{
		url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',

		// Define the test() function to check result
		test(result, resultJson) {

			// Find the feature string in the json string of result
			return resultJson.indexOf(`"name":"Owen"`) >= 0;
		},

		// Equal to:
		// 		test: {
		// 			verify(result, resultJson) {
		// 				return resultJson.indexOf(`"name":"Owen"`) >= 0;
		// 			}
		// 		},
	},

	// /////////////////////////////////////////////
	//
	// 3. Complete definition (with full test properties)
	//	  Each api can has multiple sets of parameters, and each set of parameters has a test case.
	//
	//	  Tips:
	//    We call the properties "api", "title", "url" collectively as api info, {api, title, url},
	//    and the properties "params", "result", "test" collectively as test info, {params, result, test}
	//
	// /////////////////////////////////////////////

	{
		// .............................................
		//
		// Api Info
		//
		// .............................................

		api: '/do/helloWorld',

		// If omitted, parse it from "api" (in this case, it will be "Do - HelloWorld")
		title: 'The title of this api',

		url: 'http://localhost:3000/do/helloWorld?name=Owen',


		// .............................................
		//
		// Test Info
		//
		// .............................................

		params: {
			name: 'Owen',
		},

		result: {
			"success": true,
			"data": "Hello world! I am Owen."
		},


		// The test case
		// 		For clarity of reading, write it as the sequence below:
		//			{beforeDo, url, getResult, afterDo, verify}
		test: {

			// Call the specific apis before do with test url if needed.
			// 		E.g., insert some data to db before do with test url.
			// 		The beforeDo can be an array, an api, a title, or a url.
			beforeDo: [
				'/do/helloWorld', // by api
				'The title of this api', // by title
				'http://localhost:3000/do/helloWorld?name=Owen', // by url
			],

			// The test url. If omitted, use the demo url.
			// 		E.g., the test url carries more parameters than the demo url for specific purposes.
			url: undefined,

			// Explaining how to get the result. If omitted, use the demo url.
			// 		E.g., after deleting the data via test url, re-acquire the data to verify if it is exists.
			// 		The usage is the same as beforeDo.
			getResult: undefined,

			// Call the specific apis after get the returned result if needed.
			// 		E.g., delete the inserted data in before.
			// 		The usage is the same as beforeDo.
			afterDo: undefined,

			// See below to learn more about the usage of verify:
			//		https://github.com/hiowenluke/noapi/tree/master/examples/04-define-API-and-test-cases-[completely]/api/define.js
			verify(result, resultJson) {
				return result.data.indexOf(`Hello world`) >= 0;
			}
		}
	},
];

module.exports = me;


// -------------------------
// Definition
// -------------------------

// We can define the APIs and test cases in three ways, array, object and file:

//		1. With array
//      https://github.com/hiowenluke/noapi/blob/master/examples/01-define-API-and-test-cases-with-array/api/define.js

//		2. With object
//      https://github.com/hiowenluke/noapi/blob/master/examples/02-define-API-and-test-cases-with-object/api/define.js

//		3. With file
//      https://github.com/hiowenluke/noapi/tree/master/examples/03-define-API-and-test-cases-with-file/api


// -------------------------
// Noapi Best Practices
// -------------------------

// At the beginning of the project, there were no test cases,
// so we could simply define the APIs as one of the follows:

//		1. Minimal definition (without test cases)
//		https://github.com/hiowenluke/noapi/blob/master/examples/05-define-API-[minimally]/api/define.js

//		2. Minimal definition with empty file (without test cases)
//		https://github.com/hiowenluke/noapi/tree/master/examples/06-define-API-with-empty-file/api

// As the project progresses, we can gradually improve the definition of test cases:

//		3. Complete definition (with full test options)
//		https://github.com/hiowenluke/noapi/tree/master/examples/04-define-API-and-test-cases-[completely]/api/define.js

// If necessary, we can switch between the three ways.

// 		4. Use tools "noapi-definejs-converter"
//      https://github.com/hiowenluke/noapi-definejs-converter
