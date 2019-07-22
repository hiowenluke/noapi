
const me = [

	// 1. A demo url with params
	'http://localhost:3000/bill/form/crud?formname=trader',

	// 2. The params are in {params} instead of in demo url
	{
		url: 'http://localhost:3000/bill/form/crud',
		params: {
			formname: 'trader',
		},
	},

	// 3. With result
	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// The test result must be exactly matches it
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		},
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// If the result is large, save it to a json file in directory /test/comparison.
		result: "bill.form.crud",

		// Equal to:
		// 		resultComparisonFile: "bill.form.crud",
	},

	// 4. With test (an object, a string, or a function)
	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: {
			formname: 'trader',
		},

		// Equal to:
		// 		test: {
		// 			verify: {
		// 				formname: 'trader',
		// 			}
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: `"formname":"trader"`,

		// Equal to:
		// 		test: {
		// 			verify: `"formname":"trader"`,
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test(resultText, result) {

			// Find the feature string in the result text
			return resultText.indexOf(`"formname":"trader"`) >= 0;
		},

		// Equal to:
		// 		test: {
		// 			verify(resultText, result) {
		//
		// 				// Find the feature string in the result text
		// 				return resultText.indexOf(`"formname":"trader"`) >= 0;
		// 			}
		// 		},
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test(resultText, result) {

			// Find the specified values in the result object
			return result.data.formname === 'trader';
		},

		// Equal to:
		// 		test: {
		// 			verify(resultText, result) {
		//
		// 				// Find the specified values in the result object
		// 				return result.data.formname === 'trader';
		// 			}
		// 		}
	},

	// 5. Complete definition (as same as /src/routes/api/define/model.js)
	{
		api: '/bill/form/crud', // If omitted, parse from url
		title: 'Bill - Form - Crud', // If omitted, parse from url
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		params: [
			{
				// Inputting. If omitted, parse from url
				data: {
					formname: 'trader',
				},

				// Outputting. It can be omitted if not required for testing.
				result: {
					"success": true,
					"data": {
						"formname": "trader"
					}
				},

				// Test case
				// For clarity of reading, write it as the sequence below:
				//		{beforeDo, url, getResult, afterDo, verify}
				test: {

					// Call specific apis before do with test url if needed.
					// E.g., insert some data to db before do with test url.
					// The beforeDo can be an array, or an api, title, url, or some other specified property.
					beforeDo: [
						'/bill/form/crud', // by api
						'Bill - Form - Crud', // by title
						'http://localhost:3000/bill/form/crud?formname=trader', // by url
						'id@123', // by some other specified property, such as id, e.g., {id: 123, api: '/xxx', ...}
					],

					// The test url. If omitted, use the demo url.
					// E.g., the test url carries more parameters than the demo url for specific purposes.
					url: undefined,

					// How to get the result. If omitted, use the demo url.
					// E.g., after deleting the data via test url, re-acquire the data to verify if it is exists.
					// The usage is the same as beforeDo.
					getResult: undefined,

					// Call specific apis after get the test result if needed.
					// E.g., delete the inserted data in before.
					// The usage is the same as beforeDo.
					afterDo: undefined,

					// See above section "4. With test" for the usage of verify
					verify(resultText, resultObject) {
						return resultText.indexOf(`"formname":"trader"`) >= 0;
					}
				}
			}
		],
	},
];

module.exports = me;
