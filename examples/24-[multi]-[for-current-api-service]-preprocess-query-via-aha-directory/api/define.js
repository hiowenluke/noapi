
// See "06-define-apis-and-test-cases-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		result: {
			"success": true,
			"data": {
				"formName": "trader",
				"tableName": "tbl_trader",
				"billName": "trader",
				"isbill": true,
				"isinfo": false
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/dropdownlist?formName=paymethod',
		result: {
			"success": true,
			"data": [
				"Cash",
				"MasterCard"
			]
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=goods',
		result: {
			"success": true,
			"data": {
				"formName": "goods",
				"tableName": "tbl_goods",
				"infoName": "goods",
				"isbill": false,
				"isinfo": true,
				"isShowBom": true
			}
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=employee',
		result: {
			"success": true,
			"data": {
				"formName": "employee",
				"tableName": "tbl_employee",
				"infoName": "employee",
				"isbill": false,
				"isinfo": true,
				"isShowBom": false
			}
		}
	},

	{
		url: 'http://localhost:3000/info/dropdownlist?formName=employee',
		result: {
			"success": true,
			"data": [
				"Captain America",
				"Iron Man",
				"Thor"
			]
		}
	},
];

module.exports = me;
