
// See "02-api-definition-[complete]" to learn more.

const me = [
	{
		// The demo url with parameters
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// Expected result
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		}
	}
];

module.exports = me;
