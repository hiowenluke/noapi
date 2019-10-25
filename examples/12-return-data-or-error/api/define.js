
// See "04-define-API-and-test-cases-[completely]" to learn more.

const me = [

	// Return error
	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		result: {
			"success": false,
			"error": "Something is wrong"
		}
	},

	// Return data
	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=check',
		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": true
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=uncheck',
		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": false
			}
		}
	},
];

module.exports = me;
