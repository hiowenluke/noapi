
// See "04-define-API-and-test-cases-[completely]" to learn more.

const me = [
	{
		title: 'Add User',
		url: 'http://localhost:3000/user/add?username=CaptainAmerica',
		result: {
			"success": true,
			"data": 1
		}
	},

	{
		title: 'Get User',
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
		title: 'Del User',
		url: 'http://localhost:3000/user/del?username=CaptainAmerica',
		result: {
			"success": true,
			"data": 1
		}
	},

	{
		title: 'Add User // One result',
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
				'Add User',
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
				'Del User',
			]
		}
	},

	{
		title: 'Add User // Multi results',
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
				'Add User',
				'http://localhost:3000/user/add?username=IronMan',
				'http://localhost:3000/user/add?username=Thor',
			],

			// Each url corresponds to a result
			getResult: [
				'http://localhost:3000/user/get?username=Thanos',
				'http://localhost:3000/user/get?username=Thanos',
			],

			afterDo: [
				'http://localhost:3000/user/del?username=Thanos',
				'http://localhost:3000/user/del?username=Thor',
				'http://localhost:3000/user/del?username=IronMan',
				'Del User',
			],

			// The resultArr is an array:
			// 		1. Each element corresponds to a url in getResult
			// 		2. Fetch the data of each result via resultArr[i].data or dataArr[i]
			verify(resultArr, dataArr) {

				// dataArr[i] === result[i].data
				return 1 &&
					resultArr[0].data.username === 'Thanos' && resultArr[1].data.username === 'Thanos' &&
					dataArr[0].username === 'Thanos' && dataArr[1].username === 'Thanos' &&
				1;
			}
		}
	},
];

module.exports = me;
