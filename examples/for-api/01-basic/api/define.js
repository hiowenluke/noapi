
// See /noapi/src/api/define/__model.js to learn more.

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
