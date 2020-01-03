
const data = {
	user: [
		{
			id: 1,
			username: 'admin',
			password: '123456',
			isOnline: 0,
		}
	]
};

// Fake database
const db = {
	user: {
		async insert(userInfo) {
			const id = data.user.length + 1;

			userInfo.isOnline = 0;
			userInfo.id = id;
			data.user.push(userInfo);

			return id;
		},

		async update(where, filedValues) {
			const userInfo = await this.select(where);
			if (!userInfo) {
				return 0;
			}

			const keys = Object.keys(filedValues);
			keys.forEach(key => {
				userInfo[key] = filedValues[key];
			});

			return 1;
		},

		async delete(where) {
			const userInfoId = await this.select(where, true);
			if (userInfoId) {
				data.user.splice(userInfoId - 1, 1);
				return 1;
			}

			return 0;
		},

		async select(where, isReturnId) {
			if (!where) {
				return data.user;
			}
			else {
				if (typeof where === 'string') {
					where = {username: where};
				}

				const whereKeys = Object.keys(where);
				const userInfo = data.user.find(item => {
					const index = whereKeys.findIndex(key => where[key] !== item[key]);
					if (index === -1) {
						return item;
					}
				});

				if (userInfo) {
					return isReturnId ? userInfo.id : userInfo;
				}
				else {
					return null;
				}
			}
		}
	}
};

module.exports = db;
