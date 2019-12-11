
const _ = require('lodash');

const getValidKeys = (obj) => {
	let keys = Object.keys(obj);
	if (keys.length === 0) {
		keys = Object.keys(obj.__proto__);
	}

	if (keys.length === 0) return;
	if (keys.indexOf('constructor') >= 0) return;

	return keys;
};

/** @name lib.apiParser */
const me = {

	// {say: hi: {}} => "/say/hi"
	objectToApis(obj, path = '', arr = []) {
		const keys = getValidKeys(obj);
		if (!keys) return arr;

		keys.forEach(key => {
			const o = obj[key];
			const subPath = path + '/' + key;

			if (Object.keys(o).length === 0) {
				arr.push(subPath);
			}
			else {
				if (typeof o === 'object') {
					me.objectToApis(o, subPath, arr);
				}
			}
		});

		return arr;
	}
};

module.exports = me;
