
// There is only one parameter, named "query".

// The query is an object, the value of query properties are took
// from the "url" property or the "params" property in define.js.

// 1. From the "url" property:
// 		{
// 			...
// 													     query.formName	   query.obj				   query.arr
// 			url: 'http://localhost:3000/bill/form/crud ? formName=trader & obj={"date":"2019-05-01"} & arr=[1,"abc",{"tel":12345678}]'
// 			...
// 		}

// 2. Or From the "params" property:
// 		{
// 			...
// 			params: {
// 				formName: "trader", 		// query.formName
//
// 				obj: {						 // query.obj
// 					"date": "2019-05-01"
// 				},
//
// 				arr: [ 						// query.arr
// 					1,
// 					"abc",
// 					{
// 						"tel": 12345678
// 					}
// 				]
// 			},
// 			...
// 	}

const fn = async (query) => {
	const {formName, obj, arr} = query;
	return {formName, obj, arr};
};

module.exports = fn;
