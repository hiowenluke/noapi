
// See "02-api-definition-[completely]" to learn more.

const me = {
	bill: {
		form: {
			crud: {
				url: 'http://localhost:3000/bill/form/crud?formname=trader',
				result: {
					"success": true,
					"data": {
						"formname": "trader"
					}
				}
			},

			getFields: {
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
		},

		list: {
			getData: {
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

			getFields: {
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
		},

		dropDownList: {
			url: 'http://localhost:3000/bill/dropdownlist?formname=paymethod',
			result: {
				"success": true,
				"data": [
					"Cash",
					"MasterCard"
				]
			}
		},
	},

	info: {
		form: {
			crud: [
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
					url: 'http://localhost:3000/info/form/crud?formname=employee',
					result: {
						"success": true,
						"data": {
							"formname": "employee",
							"isShowBom": false
						}
					}
				},
			],

			getFields: {
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
		},

		list: {
			getData: {
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

			getFields: {
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
		},

		dropDownList: {
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
	},

	sys: {
		getApiVersion: {
			url: 'http://localhost:3000/sys/getApiVersion',
			result: {
				"success": true,
				"data": {
					"apiVersion": "1.0.0"
				}
			}
		},
	}
};

module.exports = me;
