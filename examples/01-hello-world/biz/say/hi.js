
// Test
// http://localhost:3000/say/hi?name=owen&age=100

// Result
// 		{
// 			"success": true,
// 			"data": {
// 				"msg": "Hi, I am owen, 100 years old."
// 			}
// 		}

const fn = async (name, age) => {
	return {msg: `Hi, I am ${name}, ${age} years old.`};
};

module.exports = fn;
