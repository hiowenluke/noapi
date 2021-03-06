
// Test
// http://localhost:3000/foo/bar?name=owen&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]

// Result
// 		{
// 			"success": true,
// 			"data": {
// 				"name": "owen",
// 				"obj": {
// 					"date": "2019-05-01"
// 				},
// 				"arr": [
// 					1,
// 					"abc",
// 					{
// 						"tel": 12345678
// 					}
// 				]
// 			}
// 		}

const fn = async (name, obj, arr) => {
	return {name, obj, arr};
};

module.exports = fn;
