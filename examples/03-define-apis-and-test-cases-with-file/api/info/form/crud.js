
const me = [
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
		url: 'http://localhost:3000/info/form/crud?formName=employee',
		result: {
			"success": true,
			"data": {
				"formName": "employee",
				"isShowBom": false
			}
		}
	},
];

module.exports = me;
