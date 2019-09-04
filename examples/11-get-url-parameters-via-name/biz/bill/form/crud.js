
// According to the parameters name of the function, take the value
// from the "url" property or the "params" property in define.js.

// 1. From the "url" property:
// 		{
// 			...
// 													   formName		   obj						arr
// 			url: 'http://localhost:3000/bill/form/crud?formName=trader&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]'
// 			...
// 		}

// 2. Or from the "params" property:
// 		{
// 			...
// 			params: {
// 				formName: "trader",
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

const fn = async (formName, obj, arr) => {

	// If the request is a "get" action, then the obj is a string.
	// If the request is a "post" action, then the obj is an object.
	if (typeof obj === 'string') obj = JSON.parse(obj);
	if (typeof arr === 'string') arr = JSON.parse(arr);

	return {formName, obj, arr};
};

module.exports = fn;
