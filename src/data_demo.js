
const me = {

	// The demo of data.core
	core: {
		default: {

			// A function
			// Execute all function files in the aha directory in the specified order with kdo.
			aha: { // /<user project>/aha

			},

			api: { // /<user project>/api
				bill: { //				/bill
					form: {	//				/form
						crud: {}, //			/crud.js
					}
				}
			},

			biz: { // /<user project>/biz
				bill: { // 				/bill
					form: { //  			/form
						crud: {}, // 			/crud.js
					}
				}
			}
		},

		api: { // The sysName is "api"
			// ...
		},

		forms: { // The sysName is "forms"
			// ...
		},

		erp: { // The sysName is "erp"
			// ...
		},

		mms: { // The sysName is "mms"
			// ...
		},
	},

	// The demo of data.defineJs
	defineJs: {
		filename: "/path/to/user project/api/define.js",

		api: {
			api: '/bill/form/crud', // If omitted, parse from url
			title: 'Bill - Form - Crud', // If omitted, parse from api
			url: 'http://localhost:3000/bill/form/crud?formname=trader',
		},

		docs: [
			{
				// io: input params, output result
				io: {

					// Send it to server. If omitted, parse from url
					params: {
						formname: 'trader',
					},

					// Get it from server. It can be omitted if not required for testing.
					result: {
						"success": true,
						"data": {
							"formname": "trader"
						}
					},
				},

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

					// See above section "4. With test ..." for the usage of verify
					verify(result, resultText) {
						return resultText.indexOf(`"formname":"trader"`) >= 0;
					}
				}
			}
		]
	}
};
