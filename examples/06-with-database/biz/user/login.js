
// Test url
// http://localhost:3000/user/login?username=owen&password=123

const db = require('../../db');

const fn = async (username, password) => {
	const result = await db.user.update({username, password}, {isOnline: 1});
	return !!result;
};

module.exports = fn;
