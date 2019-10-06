
// See "06-define-apis-and-test-cases-[completely]" to learn more.

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

			getResult:
				'http://localhost:3000/user/get?username=Thanos',

			afterDo: [
				'http://localhost:3000/user/del?username=Thanos',
				'http://localhost:3000/user/del?username=Thor',
				'http://localhost:3000/user/del?username=IronMan',
				'Del User // Captain America',
			],

			// Specify the verify function, verify the result object
			// 		or resultText for json string of result.
			verify(result, resultText) {
				return result.data.username === 'Thanos';
			}
		}
	},
];

module.exports = me;
