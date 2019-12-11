
const me = {
	'/say/hi': {
		success: true,
		data: {msg: "Hi, I'm owen, 100 years old."}
	},

	'/say/hi2': {
		success: true,
		data: {
			"msg": "Hi, I'm owen, 100 years old.",
			"reversed": ".dlo sraey 001 ,newo m'I ,iH",
			"encoded": "SGksIEknbSBvd2VuLCAxMDAgeWVhcnMgb2xkLg=="
		}
	},

	'/about': {
		success: true,
		data: "Author: Owen Luke"
	},

	'/foo/bar': {
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
	},

	'/do/somethingIsWrong': {
		success: false,
		error: "something is wrong"
	},

	'/': function(result) {
		return result.indexOf('hi') >= 0;
	},

	'/user/register': {
		success: true,
		data: {
			"username": "owen",
			"password": "123456"
		}
	}
};

module.exports = me;
