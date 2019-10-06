
// See "04-define-apis-and-test-cases-[completely]" to learn more.

const me = [
	{
		title: 'Noapi route',
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		result: {
			"success": true,
			"data": {
				"formName": "trader"
			}
		}
	}
];

module.exports = me;
