
const me = [

	// /////////////////////////////////////////////
	//
	// 1. With result property
	//
	//    When testing, the returned result must be matches it exactly
	//    if the test property is omitted or it is "===result".
	//
	// /////////////////////////////////////////////

	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		result: {
			"success": true,
			"data": {
				"formName": "trader"
			}
		},

		// There is no test property in this case.
		// When testing, the result returned from server must be matches the result property exactly.
	},

	{
		url: 'http://localhost:3000/info/dropdownlist?formName=employee',
		result: {
			"success": true,
			"data": [
				"Captain America",
				"Iron Man",
				"Thor"
			]
		},

		// The JSON string of the result returned from server must has the specified featured string.
		test: `===result`,
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',

		// If the result property is large, save it to a json file in directory /test/comparison.
		// In this case, just open "/test/comparison/bill.form.crud.json" to learn more.
		result: "bill.form.crud",
	},


	// /////////////////////////////////////////////
	//
	// 2. With test property
	//	  It can be an object, a string, a boolean, a regExp, or a function.
	//
	// /////////////////////////////////////////////

	{
		url: 'http://localhost:3000/info/form/crud?formName=trader',

		// The Object of the result returned from server must has "formName" property, and it's value must be "trader".
		test: {
			formName: 'trader',
		},

		// Equal to:
		// 		test: {
		// 			verify: {
		// 				formName: 'trader',
		// 			}
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		test: `"formName":"trader"`,

		// Equal to:
		// 		test: {
		// 			verify: `"formName":"trader"`,
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		test: /(trader)|(goodsid)/,

		// Equal to:
		// 		test: {
		// 			verify: /(trader)|(goodsid)/,
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',

		// Verify the state of result (the value of result.success) returned from server
		test: true,

		// Equal to:
		// 		test: {
		// 			verify: true,
		// 		}
	},

	{
		url: 'http://localhost:3000/bill/dropdownlist?formName=paymethod',
		result: {
			"success": true,
			"data": [
				"Cash",
				"MasterCard",
			]
		},

		// The test property is specified in this case.
		// When testing, it will be used to validate whether the result returned from server is correct.
		test(result, resultText) {

			// Find the feature string in the result text (the JSON string of result)
			return resultText.indexOf("Cash") >= 0;
		},
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=goods',
		result: {
			"success": true,
			"data": {
				"formName": "goods",
				"isShowBom": true,
			}
		},

		test(result, resultText) {

			// Find the specified value in the result object
			return result.data.formName === 'goods';
		},
	},
];

module.exports = me;
