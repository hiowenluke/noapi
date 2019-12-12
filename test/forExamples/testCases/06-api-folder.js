
const me = {
	'/say/hi': {
		params: {
			name: 'owen',
			age: 100
		},

		result: {
			success: true,
			data: {
				"msg": "Hi, I'm owen, 100 years old.",
				"reversed": ".dlo sraey 001 ,newo m'I ,iH",
				"encoded": "SGksIEknbSBvd2VuLCAxMDAgeWVhcnMgb2xkLg=="
			}
		}
	},

	'/about': {
		result: {
			success: true,
			data: {
				"version": "1.0.0"
			}
		}
	},
};

module.exports = me;
