
// Corresponds to api: /do/helloWorld
// Demo url: http://localhost:3000/do/helloWorld?name=Owen

const fn = async (name) => {
	return `Hello world! I am ${name}`;

	// Output to client:
	// 		{
	// 			"success": true,
	// 			"data": "Hello world! I am Owen"
	// 		}
};

module.exports = fn;
