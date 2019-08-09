
const db = require('../../db');

const fn = async () => {
	return await db.user.select('Thanos');
};

module.exports = fn;
