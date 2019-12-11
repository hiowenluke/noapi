
// Test url
// 		http://localhost:3000/about

// Expected result
//		{
// 			"success": true,
// 			"data": "Author: Owen Luke"
// 		}

const fn = async (query) => {
	return `Author: Owen Luke`;
};

module.exports = fn;
