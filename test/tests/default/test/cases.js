
const me = [
	'/',
	{
		result: {
			"success": true,
			"data": "Welcome to Noapi."
		}
	},

	'/xxx',
	{
		result: {
			"success": false,
			"error": "/xxx not found"
		}
	},

	'/get',
	{
		method: 'GET',

		params: {
			"name": "owen",
			"obj": {
				"date": "2019-05-01"
			},
			"arr": [
				1,
				"abc",
				{
					"tel": 12345678
				}
			]
		},

		result: {
			"success": true,
			"data": {
				"name": "owen",
				"obj": {
					"date": "2019-05-01"
				},
				"arr": [
					"1",
					"abc",
					{
						"tel": "12345678"
					}
				]
			}
		}
	},

	'/post',
	{
		method: 'POST',

		params: {
			"name": "owen",
			"obj": {
				"date": "2019-05-01"
			},
			"arr": [
				1,
				"abc",
				{
					"tel": 12345678
				}
			]
		},

		result: {
			"success": true,
			"data": {
				"name": "owen",
				"obj": {
					"date": "2019-05-01"
				},
				"arr": [
					"1",
					"abc",
					{
						"tel": "12345678"
					}
				]
			}
		}
	}
];

module.exports = me;
