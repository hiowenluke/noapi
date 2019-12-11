
// Test url
// 		http://localhost:3000/say/hi?name=owen&age=100

// Expected result
// 		{
// 			"success": true,
// 			"data": {
// 				"msg": "Hi, I'm owen, 100 years old."
// 			}
// 		}

const fn = async (query) => {
	return {msg: `Hi, I'm ${query.name}, ${query.age} years old.`};
};

module.exports = fn;
