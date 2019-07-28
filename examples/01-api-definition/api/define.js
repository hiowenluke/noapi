
// Each of elements in array "me" is an api definition.

// There must be the following properties in the api definition:
//
// 		1. A demo "url" or a "params" (for sending data in testing).
// 		2. A "result" or a "test" (for validating data in testing).
//

// Learn more:
// 		02-api-definition-[completely]
//		03-api-definition-[minimally]
//		04-api-definition-[structurally]


const me = [
	{
		// The demo url for this api
		url: 'http://localhost:3000/bill/form/crud?formname=trader',

		// The expected result which will be returned from server in testing
		result: {
			"success": true,
			"data": {
				"formname": "trader"
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=check',
		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": true
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=uncheck',
		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": false
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/getFields?formname=trader',
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
		url: 'http://localhost:3000/bill/list/getData?formname=trader',
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
		url: 'http://localhost:3000/bill/list/getFields?formname=trader',
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
				"isShowBom": true
			}
		}
	},

	{
		url: 'http://localhost:3000/info/form/getFields?formname=goods',
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
		url: 'http://localhost:3000/info/form/crud?formname=employee',
		result: {
			"success": true,
			"data": {
				"formname": "employee",
				"isShowBom": false
			}
		}
	},

	{
		url: 'http://localhost:3000/info/list/getData?formname=goods',
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
		url: 'http://localhost:3000/info/list/getFields?formname=goods',
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

	{
		url: 'http://localhost:3000/sys/getApiVersion',
		result: {
			"success": true,
			"data": {
				"apiVersion": "1.0.0"
			}
		}
	},

	{
		url: 'http://localhost:3000/about',
		result: {
			"success": true,
			"data": {
				"author": "Owen Luke"
			}
		}
	},
];

module.exports = me;
