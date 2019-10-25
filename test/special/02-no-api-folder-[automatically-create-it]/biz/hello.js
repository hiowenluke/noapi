
// Corresponds to api: /hello
// Demo url: http://localhost:3000/hello

const fn = async (query) => {
    return "Hello world!";

	// Output to client:
	// 		{
	// 			"success": true,
	// 			"data": "Hello world!"
	// 		}
};

module.exports = fn;
