
const me = {
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
};

module.exports = me;
