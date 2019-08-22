
const db = require('../../db');

const fn = async (query) => {
	const result = await db.user.select(query.username);

	if (query.username === 'CaptainAmerica') {
		result.isCaptain = true;
	}

	return result;
};

module.exports = fn;
