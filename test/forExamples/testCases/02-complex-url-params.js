
const me = {
	'/foo/bar': {
		params: {
			name: "owen",
			obj: {
				date: "2019-05-01"
			},
			arr: [
				1,
				"abc",
				{
					tel: 12345678
				}
			]
		},

		result: {
			success: true,
			data: {
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
};

module.exports = me;
