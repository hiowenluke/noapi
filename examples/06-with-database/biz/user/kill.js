
// Test url
// http://localhost:3000/user/kill?username=owen

const db = require('../../db');

const fn = async (username) => {
	return await db.user.delete(username);
};

module.exports = fn;
