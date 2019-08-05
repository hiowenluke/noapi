
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
		title: 'a',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		},

		// There is no test property in this case.
		// When testing, the result returned from server must be matches the result property exactly.
	},

	{
		title: 'b',
		url: 'http://localhost:3000/info/dropdownlist?formname=employee',
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
		title: 'c',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

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
		title: 'd',
		url: 'http://localhost:3000/info/form/crud?formname=employee',

		// The Object of the result returned from server must has "formname" property, and it's value must be "trader".
		test: {
			formname: 'employee',
		},

		// Equal to:
		// 		test: {
		// 			verify: {
		// 				formname: 'trader',
		// 			}
		// 		}
	},

	{
		title: 'e',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: `"formname":"trader"`,

		// Equal to:
		// 		test: {
		// 			verify: `"formname":"trader"`,
		// 		}
	},

	{
		title: 'f',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: /(trader)|(goodsid)/,

		// Equal to:
		// 		test: {
		// 			verify: /(trader)|(goodsid)/,
		// 		}
	},

	{
		title: 'g',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// Verify the value of result.success returns from server
		test: true,

		// Equal to:
		// 		test: {
		// 			verify: true,
		// 		}
	},

	{
		title: 'h',
		url: 'http://localhost:3000/bill/dropdownlist?formname=paymethod',
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

			// Find the feature string in the result text
			return resultText.indexOf("Cash") >= 0;
		},
	},

	{
		title: 'i',
		url: 'http://localhost:3000/info/form/crud?formname=goods',
		result: {
			"success": true,
			"data": {
				"formname": "goods",
				"isShowBom": true,
			}
		},

		test(result, resultText) {

			// Find the specified values in the result object
			return result.data.formname === 'goods';
		},
	},
];

module.exports = me;
