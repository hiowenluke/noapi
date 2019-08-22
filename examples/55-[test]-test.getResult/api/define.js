
// See "06-api-definition-[completely]" to learn more.

const me = [
	{
		title: 'Add User // Captain America',
		url: 'http://localhost:3000/user/add?username=CaptainAmerica',
		result: {
			"success": true,
			"data": 1
		}
	},

	{
		title: 'Get User // Captain America',
		url: 'http://localhost:3000/user/get?username=CaptainAmerica',
		result: {
			"success": true,
			"data": {
				"id": 3,
				"username": "CaptainAmerica",
			}
		}
	},

	{
		title: 'Del User // Captain America',
		url: 'http://localhost:3000/user/del?username=CaptainAmerica',
		result: {
			"success": true,
			"data": 1
		}
	},

	{
		title: 'Add User // Thanos',
		url: 'http://localhost:3000/user/add?username=Thanos',
		result: {
			"success": true,
			"data": {
				"id": 6,
				"username": "Thanos",
			}
		},

		test: {
			beforeDo: [
				'Add User // Captain America',
				'http://localhost:3000/user/add?username=IronMan',
				'http://localhost:3000/user/add?username=Thor',
			],

			// Use getResult instead of the demo url to get the result.
			// The demo url will returns the below result:
			// 			{
			// 				"success": true,
			// 				"data": 1
			// 			}
			//
			// It is not the result what we expected in this case.
			// So we use getResult to re-get it.
			getResult:
				'http://localhost:3000/user/get?username=Thanos',

			afterDo: [
				'http://localhost:3000/user/del?username=Thanos',
				'http://localhost:3000/user/del?username=Thor',
				'http://localhost:3000/user/del?username=IronMan',
				'Del User // Captain America',
			]
		}
	},
];

module.exports = me;
