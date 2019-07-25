
// See /noapi/src/defineJs_demos.js to learn more.

const me = [
	'http://localhost:3000/bill/form/crud?formname=trader',

	{
		// Must specify the title property for testing
		title: 'Bill - Form - Crud',
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
		title: 'Bill - DropDownList',
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
		title: 'Info - Form - Crud // for goods',
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

	{
		title: 'Info - Form - Crud // for employee',
		url: 'http://localhost:3000/info/form/crud?formname=employee',
		result: {
			"success": true,
			"data": {
				"formname": "employee",
				"isShowBom": false,
			}
		},

		// The Object of the result returned from server must has "formname" property, and it's value must be "trader".
		test: {
			formname: 'trader',
		},
	},

	{
		title: 'Info - DropDownList',
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
		test: `"formname":"trader"`,
	},
];

module.exports = me;
