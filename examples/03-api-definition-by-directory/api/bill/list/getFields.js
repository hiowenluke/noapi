
const me = {
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
};

module.exports = me;
