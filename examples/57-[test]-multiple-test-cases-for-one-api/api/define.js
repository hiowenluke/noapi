
// See "06-define-api-[completely]" to learn more.

const me = [
	'http://localhost:3000/user/get',

	{
		url: 'http://localhost:3000/user/add',
		tests: [
			{
				params: {
					username: "CaptainAmerica",
				},

				result: {
					"success": true,
					"data": {
						"id": 3,
						"username": "CaptainAmerica",
						"isCaptain": true,
					}
				},

				test: {
					getResult: 'http://localhost:3000/user/get',
				}
			},

			{
				params: {
					username: "IronMan",
				},

				result: {
					"success": true,
					"data": {
						"id": 4,
						"username": "IronMan",
					}
				},

				test: {
					getResult: 'http://localhost:3000/user/get',
				}
			},
		]
	},
];

module.exports = me;
