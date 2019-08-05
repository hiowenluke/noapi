
// Since we used the config.onlyTests parameter in /test/config.js
// to specify the test cases to run, the title property will be used:

//		1. Automatically generated from url, e.g.:
//				If the url is "http://localhost:3000/bill/form/crud?formname=trader",
//				then the title will be "Bill - Form - Crud // formname=trader".

//		2. Specified via a string such as 'ha ha'.

//		3. Use {apiTitle} to refer the string automatically generated from api path, e.g.:
//				If the api path is "/bill/form/crud",
//				then the title will be "Bill - Form - Crud".

const me = [
	{
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
		title: 'ha ha',

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
		title: '{apiTitle} // for goods',
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
			formname: 'employee',
		},
	},

	{
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
];

module.exports = me;
