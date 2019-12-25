
// Test url
// http://localhost:3000/user/logout?username=owen

const db = require('../../db');

const fn = async (username) => {
	const result = await db.user.update(username, {isOnline: 0});
	return !!result;
};

module.exports = fn;
