
// See "04-define-apis-and-test-cases-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/bill/form/crud?formName=trader',
		result: {
			"success": true,
			"data": {
				"formName": "trader"
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/getFields?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "billid",
					"type": "number"
				},
				{
					"fieldname": "billcode",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/bill/list/getData?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"billid": 1,
					"billcode": "XX-201905-00001"
				},
				{
					"billid": 2,
					"billcode": "XX-201905-00002"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/bill/list/getFields?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "billid",
					"type": "number"
				},
				{
					"fieldname": "billcode",
					"type": "string"
				}
			]
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
				"isShowBom": true
			}
		}
	},

	{
		url: 'http://localhost:3000/info/form/getFields?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "id",
					"type": "number"
				},
				{
					"fieldname": "code",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=employee',
		result: {
			"success": true,
			"data": {
				"formName": "employee",
				"isShowBom": false
			}
		}
	},

	{
		url: 'http://localhost:3000/info/list/getData?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"id": 1,
					"code": "SS-0001"
				},
				{
					"id": 2,
					"code": "SS-0002"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/info/list/getFields?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "id",
					"type": "number"
				},
				{
					"fieldname": "code",
					"type": "string"
				}
			]
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

	{
		url: 'http://localhost:3000/sys/getApiVersion',
		result: {
			"success": true,
			"data": {
				"apiVersion": "1.0.0"
			}
		}
	},
];

module.exports = me;
