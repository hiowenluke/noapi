
// Corresponds to api: /do/say/hi2
// Demo url: http://localhost:3000/do/say/hi2?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]

const fn = async (query) => {

	// There is only one parameter, named "query".

	// The query is an object, the value of query properties are took
	// from the "url" property or the "params" property in define.js.

	// 1. From the "url" property:
	// 		{
	// 			...
	// 											 query.name     .age	.obj				  	  .arr
	// 			url: 'http://localhost:3000/do/say/hi?name=Owen&age=100&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]'
	// 			...
	// 		}

	// 2. Or From the "params" property:
	// 		{
	// 			...
	// 			params: {
	// 				name: "Owen", // query.name
	//				age: 100, // query.age
	//
	// 				obj: { // query.obj
	// 					"date": "2019-05-01"
	// 				},
	//
	// 				arr: [ // query.arr
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
		msg: `Hi, I'm ${query.name}, ${query.age} years old.`,
		obj: query.obj,
		arr: query.arr,
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
