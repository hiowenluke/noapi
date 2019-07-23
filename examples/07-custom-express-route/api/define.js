
// See /noapi/src/api/define/__model.js to learn more.

const me = [
	{
		title: 'Noapi route',
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		}
	},

	{
		title: 'User custom route',
		url: 'http://localhost:3000/v1/test',
		result: "ok"
	},
];

module.exports = me;
