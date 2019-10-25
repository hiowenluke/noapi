
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
];

module.exports = me;
