
// See "06-api-definition-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/bill/form/crud?formname=employee',
		result: {
			"success": true,
			"data": {
				"formname": "employee"
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		result: {
			"success": false,
			"error": "The formname must be employee"
		}
	},

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
