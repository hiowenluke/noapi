
// Corresponds to api: /do/say/hi3
// Demo url: http://localhost:3000/do/say/hi3?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]

const fn = async (name, age, obj, arr) => {

	// According to the parameters name of the function, take the value
	// from the "url" property or the "params" property in define.js.

	// 1. From the "url" property:
	// 		{
	// 			...
	// 											 	   name      age	 obj				  	   arr
	// 			url: 'http://localhost:3000/do/say/hi3?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]'
	// 			...
	// 		}

	// 2. Or from the "params" property:
	// 		{
	// 			...
	// 			params: {
	// 				name: "Owen",
	//				age: 100,
	//
	// 				obj: {
	// 					"date": "2019-05-01"
	// 				},
	//
	// 				arr: [
	// 					1,
	// 					"abc",
	// 					{
	// 						"tel": 12345678
	// 					}
	// 				]
	// 			},
	// 			...
	// 	}

	return {
		msg: `Hi, I'm ${name}, ${age} years old.`,
		obj: obj, // or just "obj,"
		arr: arr, // or just "arr,"
	};

	// Output to client:
	// 		{
	// 			"success": true,
	// 			"data": {
	// 				"msg": "Hi, I'm Owen, 100 years old."
	// 				obj: {
	// 					"date": "2019-05-01"
	// 				},
	// 				arr: [
	// 					1,
	// 					"abc",
	// 					{
	// 						"tel": 12345678
	// 					}
	// 				]
	// 			}
	// 		}
};

module.exports = fn;
