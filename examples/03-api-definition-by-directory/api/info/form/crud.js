
// The following api definition is the same as "02-api-definition-[completely]".

// Note:
//		1. There must be a "url" or a "params", a "result" or a "test" property.
// 		2. The "api" property will be ignored ('cause it will be parsed from the directory path).

const me = {

	api: '/info/form/crud', // Not necessary
	title: 'This is title of this api',
	url: 'http://localhost:3000/info/form/crud',

	docs: [
		{
			params: {
				formname: 'goods',
			},

			result: {
				"success": true,
				"data": {
					"formname": "goods",
					"isShowBom": true,
				}
			},

			test: {
				// ...
			}
		},

		{
			params: {
				formname: 'employee',
			},

			result: {
				"success": true,
				"data": {
					"formname": "trader",
					"isShowBom": false,
				}
			},

			test: {
				// ...
			}
		},
	]
};

module.exports = me;
