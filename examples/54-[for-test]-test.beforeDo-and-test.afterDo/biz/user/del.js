
const db = require('../../db');

const fn = async (query) => {
	return await db.user.delete(query.username);
};

module.exports = fn;
