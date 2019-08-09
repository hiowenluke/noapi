
const lib = require('./__lib');

const data = [
	{id: 1, username: 'Owen'},
	{id: 2, username: 'Luke'},
];

/** @name db.user */
const me = {
	async insert(user) {
		if (typeof user === 'string') {
			user = {username: user};
		}

		if (await this.select(user)) {
			return 0;
		}

		const maxId = lib.getMaxId(data);
		user.id = maxId + 1;

		data.push(user);
		return 1;
	},

	async delete(user) {
		const username = typeof user === 'string' ? user : user.username;
		const index = data.findIndex(item => item.username === username);

		if (index >= 0) {
			data.splice(index, 1);
			return 1;
		}
		else {
			return 0;
		}
	},

	async select(user) {
		const username = typeof user === 'string' ? user : user.username;
		const item = data.find(item => item.username === username);
		return item;
	}
};

module.exports = me;
