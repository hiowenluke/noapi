
// Note:
//		1. There must be a "url" or a "params", a "result" or a "test" property.
// 		2. The "api" property will be ignored ('cause it will be parsed from the file path).

const me =

	// The following api definition is the same as "01-define-API-and-test-cases-with-array".
	// See "04-define-API-and-test-cases-[completely]" to learn more.

	{
		// The demo url for this api
		url: 'http://localhost:3000/bill/form/crud?formName=trader',

		// The expected result which will be returned from server in testing
		result: {
			"success": true,
			"data": {
				"formName": "trader"
			}
		}
	};

module.exports = me;
