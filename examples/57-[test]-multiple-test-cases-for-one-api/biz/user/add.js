
const db = require('../../db');

const fn = async (query) => {
	return await db.user.insert(query.username);
};

module.exports = fn;
