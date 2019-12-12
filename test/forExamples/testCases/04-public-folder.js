
const me = {
	'/': {
		verify(result) {
			return result.indexOf('hi') >= 0;
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
