
const me = {
	'/': {
		verify(result) {
			return result.indexOf('hi') >= 0;
		}
	},

	'/register.html': {
		verify(result) {
			return result.indexOf('submit') >= 0;
		}
	},

	'/user/register': {
		params: {
			username: "owen",
			password: "123456"
		},

		result: {
			success: true,
			data: {
				"username": "owen",
				"password": "123456"
			}
		}
	},
};

module.exports = me;
