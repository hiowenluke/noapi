
// See "02-api-definition-[complete]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader',
		result: {
			"success": true,
			"data": {
				"formname": "trader",
				"tableName": "tbl_trader",
				"billName": "trader",
				"isBill": true,
				"isInfo": false
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/dropdownlist?formname=paymethod',
		result: {
			"success": true,
			"data": [
				"Cash",
				"MasterCard"
			]
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formname=goods',
		result: {
			"success": true,
			"data": {
				"formname": "goods",
				"tableName": "tbl_goods",
				"infoName": "goods",
				"isBill": false,
				"isInfo": true,
				"isShowBom": true
			}
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formname=employee',
		result: {
			"success": true,
			"data": {
				"formname": "employee",
				"tableName": "tbl_employee",
				"infoName": "employee",
				"isBill": false,
				"isInfo": true,
				"isShowBom": false
			}
		}
	},

	{
		url: 'http://localhost:3000/info/dropdownlist?formname=employee',
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
