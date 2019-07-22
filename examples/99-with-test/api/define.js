
const me = [

	// 1. A demo url (minimalist)
	'http://localhost:3000/bill/form/crud?formname=trader',

	// 2. With a test (an object, a string, or a function)
	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: {
			formname: 'trader',
		},
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: `"formname":"trader"`,
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test(resultText, result) {

			// Find the feature string in the result text
			return resultText.indexOf(`"formname":"trader"`) >= 0;
		},
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test(resultText, result) {

			// Find the specified values in the result object
			return result.data.formname === 'trader';
		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		test: {
			// Result exactly matches the comparison file.
			// The comparisonFilename is the file name in directory /test/comparision.
			comparisonFilename: "bill.form.crud"
		}
	},

	// 3. Complete definition
	{
		api: '/bill/form/crud', // If omitted, parse from url
		title: 'Bill - Form - Crud', // If omitted, parse from url
		url: 'http://localhost:3000/bill/form/crud?formname=trader', // demo url

		params: [
			{
				data: { // If omitted, parse from url
					formname: 'trader',
				},

				result: { // For reading
					"success": true,
					"data": {
						"formname": "trader"
					}
				},

				test: {
					// The test url. If omitted, use the demo url.
					// E.g., the test url carries more parameters than the demo url for specific purposes.
					url: self.do,

					// The url for getting result. If omitted, use the demo url.
					// E.g., after deleting the data, re-acquire the data to verify if it is exists.
					resultUrl: self.get,

					// Call specify apis before test if needed.
					// E.g., insert some data to db before get data.
					before: [
						main.insert
					],

					// Call specify apis after test if needed.
					// E.g., delete the inserted data in before.
					after: [
						main.delete
					],

					verify(resultText, resultObject) {
						return resultText.indexOf(`"formname":"trader"`) >= 0;
					}
				}
			}
		],
	},
];

module.exports = me;
