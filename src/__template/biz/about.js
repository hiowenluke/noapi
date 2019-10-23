
// Corresponds to api: /about
// Demo url: http://localhost:3000/about

const fn = async (query) => {
    return {author: 'Owen Luke'};

	// Output to client:
	// 		{
	// 			"success": true,
	// 			"data": {
	//				"author": "Owen Luke"
	// 			}
	// 		}
};

module.exports = fn;
