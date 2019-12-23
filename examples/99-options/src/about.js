
// Test
// http://localhost:3001/about

// Result
//		{
// 			"success": true,
// 			"data": {
//				"version": "1.0.0"
// 			}
// 		}

const fn = async () => {
	return {version: '1.0.0'};
};

module.exports = fn;
