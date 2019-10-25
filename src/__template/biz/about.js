
// Corresponds to api: /about
// Demo url: http://localhost:3000/about

const fn = async (query) => {
    return `Author: Owen Luke`;

	// Output to client:
	// 		{
	// 			"success": true,
	// 			"data": "Author: Owen Luke"
	// 		}
};

module.exports = fn;
