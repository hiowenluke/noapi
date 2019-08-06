
// Note:
//		1. There must be a "url" or a "params", a "result" or a "test" property.
// 		2. The "api" property will be ignored ('cause it will be parsed from the directory path).

const me =

	// The following api definition is the same as "01-api-definition-by-array".
	// See "06-api-definition-[completely]" to learn more.

	{
		// The demo url for this api
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// The expected result which will be returned from server in testing
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		}
	};

module.exports = me;
