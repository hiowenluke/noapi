
const me = {
	host: '127.0.0.1',
	port: 3001,

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
