
// Test
// http://localhost:3000/say/hi?age=100&name=owen

// Result
// 		{
// 			"success": true,
// 			"data": {
// 				"msg": "Hi, I am owen, 100 years old."
// 			}
// 		}

// The order of the function parameters does NOT have to be
// the same as the order of the url parameters.
const fn = async (name, age) => {
	return {msg: `Hi, I am ${name}, ${age} years old.`};
};

module.exports = fn;
