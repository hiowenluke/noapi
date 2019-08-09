
// See "06-api-definition-[completely]" to learn more.

const me = [
	'http://localhost:3000/user/get',

	{
		url: 'http://localhost:3000/user/add',
		Tests: [
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
