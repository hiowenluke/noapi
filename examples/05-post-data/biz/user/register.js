
// Test
// http://localhost:3000/user/register?username=owen&password=123456

// Result
// 		{
// 			"success": true,
// 			"data": {
// 				"username": "owen",
// 				"password": "123456"
// 			}
// 		}

const fn = async (username, password) => {
	return {username, password};
};

module.exports = fn;
