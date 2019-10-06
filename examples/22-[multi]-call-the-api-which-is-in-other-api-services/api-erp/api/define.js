
// See "04-define-apis-and-test-cases-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/erp:/report/purchase/order?billid=1',
		result: {
			"success": true,
			"data": {
				"billid": "1",
				"formName": "trader"
			}
		}
	}
];

module.exports = me;
