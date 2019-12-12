
const reverse = require('../__lib/reverse');
const encode = require('./__lib/encode');

const fn = async (name, age) => {
	const msg = `Hi, I'm ${name}, ${age} years old.`;
	const reversed = reverse(msg);
	const encoded = encode(msg);

	return {msg, reversed, encoded};
};

module.exports = fn;
