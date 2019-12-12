
// Test
// http://localhost:3000/do/somethingIsWrong

// Result
// 		{
// 			"success": false,
// 			"error": "something is wrong"
// 		}

const fn = async () => {
	return {error: 'something is wrong'};
};

module.exports = fn;
