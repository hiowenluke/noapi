
const me = {

	// The key path "bill.form.crud" constitutes the api path "/bill/form/crud"
	bill: {
		form: {
			crud:

				// The following api definition is the same as "02-api-definition-[completely]".

				// Note:
				//		1. There must be a "url" or a "params", a "result" or a "test" property.
				// 		2. The "api" property will be ignored ('cause it will be parsed from the key path).

				{
					api: '/bill/form/crud', // Not necessary
					title: 'This is title of this api',
					url: 'http://localhost:3000/bill/form/crud?formname=trader',

					params: {
						formname: 'trader',
					},

					result: {
						"success": true,
						"data": {
							"formname": "trader"
						}
					},

					test: {
						// ...
					}
				}
		}
	},

	// The key path "info.form.crud" constitutes the api path "/info/form/crud"
	info: {
		form: {
			crud: [
				{

				}
			],
		}
	},
};

module.exports = me;
