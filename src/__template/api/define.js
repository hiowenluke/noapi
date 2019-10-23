
// Define APIs and test cases with array.

const me = [

	// 1. Define an API "/do/say/hi" via api and params
	// 		The handler is "/<project>/biz/do/say/hi.js".
	// 		That is, the biz file path rule is "/<project>/biz" + api.
	// 		Please read "/<project>/biz/do/say/hi.js" to learn more.
	{

		// Define the API (it is so simple even if it is a multi-level api path)
		api: '/do/say/hi',

		// Define input (the parameters name and demo values which the API accepted)
		params: {
			name: 'Owen', // param "name" and the demo value
			age: '100', // param "age" and the demo value
		},

		// Define output (the expected result which will be returned from server in testing)
		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
			}
		}
	},

	// 2. Define an API "/do/say/hi" via demo url (as same as previous)
	{
		// You can just specify a demo url including the api and parameters,
		// click it in your editor and view the result in your browser, so convenient.
		url: 'http://localhost:3000/do/say/hi2?name=Owen&age=100',

		result: {
			"success": true,
			"data": {
				"msg": "Hi, I'm Owen, 100 years old.",
			}
		}
	},

	// 3. Show how to pass the parameters via query to the handler.
	// 	  Please read "/<project>/biz/do/say/hi2.js" to learn more.
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

	// 4. Show how to pass the parameters name directly to the handler (as same as previous)
	//    Please read "/<project>/biz/do/say/hi3.js" to learn more.
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

	// 5. Define an API (it will returns an error message)
	{
		url: 'http://localhost:3000/do/somethingIsWrong',
		result: {
			"success": false,
			"error": "something is wrong"
		}
	},

	// 6. Define an API with full test options
	{
		// .............................................
		//
		// Api Info
		//
		// .............................................

		// If omitted, parse from "url"
		api: '/do/hellWorld',

		// If omitted, parse from "api" (such as "Do - HelloWorld")
		title: 'The title of this api',

		// The demo url for this api
		url: 'http://localhost:3000/do/helloWorld?name=Owen',


		// .............................................
		//
		// Test Info
		//
		// .............................................

		// Input (send it to server). If omitted, parse from url.
		params: {
			name: 'Owen',
		},

		// Output (get it from server). It can be omitted if not required for testing.
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
				'/do/hellWorld', // by api
				'Do - HelloWorld', // by title
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
			verify(result, resultText) {
				return result.data.indexOf(`Hello world`) >= 0;
			}
		}
	},

	// 7. Define a simple API
	{
		url: 'http://localhost:3000/about',
		result: {
			"success": true,
			"data": {
				"author": "Owen Luke"
			}
		}
	},
];

module.exports = me;


// -------------------------
// Definition
// -------------------------
// We can define the APIs in three ways, array, object and file. See below:
//		1. Define API and test cases with array
//      https://github.com/hiowenluke/noapi/blob/master/examples/01-define-API-and-test-cases-with-array/api/define.js

//		2. Define API and test cases with object
//      https://github.com/hiowenluke/noapi/blob/master/examples/02-define-API-and-test-cases-with-object/api/define.js

//		3. Define API and test cases with file
//      https://github.com/hiowenluke/noapi/tree/master/examples/03-define-API-and-test-cases-with-file/api


// -------------------------
// Noapi Best Practices
// -------------------------

// At the beginning of the project, there were no test cases,
// so we could simply define the APIs as one of the follows:
//		4. Define API minimally (without test cases)
//		https://github.com/hiowenluke/noapi/blob/master/examples/05-define-API-[minimally]/api/define.js

//		5. Define API with empty file (without test cases)
//		https://github.com/hiowenluke/noapi/tree/master/examples/06-define-API-with-empty-file/api

// As the project progresses, we can gradually improve the definition of test cases:
//		6. Define API and test cases completely (with full test options)
//		https://github.com/hiowenluke/noapi/tree/master/examples/04-define-API-and-test-cases-[completely]/api/define.js

// If necessary, we can switch between the three modes array, object and file.
// 		7. Use tools "noapi-definejs-converter"
//      https://github.com/hiowenluke/noapi-definejs-converter
