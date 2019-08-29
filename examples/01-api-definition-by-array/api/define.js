
// Each of elements in array "me" is an api definition.

// There must be the following properties in the api definition:
//
// 		1. A demo "url" or a "params" (for sending data in testing).
// 		2. A "result" or a "test" (for validating data in testing).
//

// Learn more:
// 		02-api-definition-by-object
//		03-api-definition-by-directory
//		04-api-definition-by-pure-directory
//		05-api-definition-[minimally]
//		06-api-definition-[completely]


const me = [
	{
		// The api
		api: '/bill/form/crud',

		// The parameters which this api accepted.
		// "formName" is the name of a parameter, "trader" is a demo value of it.
		params: {
			formName: 'trader',
		},

		// The expected result which will be returned from server in testing.
		result: {

			// The state of the result
			"success": true,

			// The data of the result
			"data": {
				"formName": "trader"
			}
		}
	},

	{
		// You can just specify a demo url including the api and parameters,
		// then click it in your editor and view the result in your browser.
		url: 'http://localhost:3000/bill/form/crud?formName=trader',

		// Noapi will automatically parses the api and params from the demo url,
		// so the "api" property and "params" property are omitted in this case.

		result: {
			"success": true,
			"data": {
				"formName": "trader"
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
