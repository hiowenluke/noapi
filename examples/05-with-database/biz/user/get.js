
// Test url
// http://localhost:3000/user/get?username=owen

const db = require('../../db');

const fn = async (username) => {
	return await db.user.select(username);
};

module.exports = fn;
