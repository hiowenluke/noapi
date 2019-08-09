
const db = require('../../db');

const fn = async (query) => {
	return await db.user.select(query.username);
};

module.exports = fn;
