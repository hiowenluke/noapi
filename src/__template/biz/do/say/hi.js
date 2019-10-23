
// Corresponds to api: /do/say/hi
// Demo url: http://localhost:3000/do/say/hi?name=Owen&age=100

const fn = async (query) => {
	return {
		msg: `Hi, I'm ${query.name}, ${query.age} years old.`,
	};

    // Output to client:
	// 		{
	// 			"success": true,
	// 			"data": {
	// 				"msg": "Hi, I'm Owen, 100 years old."
	// 			}
	// 		}
};

module.exports = fn;
