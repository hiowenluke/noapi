
const me = [
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
];

module.exports = me;
