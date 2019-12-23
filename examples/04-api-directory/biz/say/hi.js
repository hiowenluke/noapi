
const reverse = require('../__lib/reverse');
const encode = require('./__lib/encode');

const fn = async (name, age) => {
	const msg = `Hi, I am ${name}, ${age} years old.`;
	const reversed = reverse(msg);
	const encoded = encode(msg);

	return {msg, reversed, encoded};
};

module.exports = fn;
