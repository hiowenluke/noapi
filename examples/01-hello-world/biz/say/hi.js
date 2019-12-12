
// Test
// http://localhost:3000/say/hi?name=owen&age=100

// Result
// 		{
// 			"success": true,
// 			"data": {
// 				"msg": "Hi, I'm owen, 100 years old."
// 			}
// 		}

const fn = async (name, age) => {
	return {msg: `Hi, I'm ${name}, ${age} years old.`};
};

module.exports = fn;
