
// See "06-define-apis-and-test-cases-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/erp:/report/purchase/order?billid=1&formName=abc',
		result: {
			"success": true,
			"data": {
				"msg": "do something for form abc by api-forms"
			}
		}
	}
];

module.exports = me;
