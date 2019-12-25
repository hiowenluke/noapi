
const me = [

	'/say/hi',
	{
		params: {
			name: 'owen',
			age: 100
		},

		result: {
			"success": true,
			"data": {
				"msg": "Hi, I am owen, 100 years old.",
				"reversed": ".dlo sraey 001 ,newo ma I ,iH",
				"encoded": "SGksIEkgYW0gb3dlbiwgMTAwIHllYXJzIG9sZC4="
			}
		}
	},

	'/about',
	{
		result: {
			success: true,
			data: {
				"version": "1.0.0"
			}
		}
	},
];

module.exports = me;
