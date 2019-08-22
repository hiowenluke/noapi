
const me = [
	{
		url: 'http://localhost:3000/bill/form/crud?formname=trader&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]',

		result: {
			"success": true,
			"data": {
				"formname": "trader",
				"obj": {
					"date": "2019-05-01"
				},
				"arr": [
					1,
					"abc",
					{
						"tel": 12345678
					}
				]
			}
		}
	},
];

module.exports = me;
