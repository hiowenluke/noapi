
const fn = (b64Encoded) => {
	return Buffer.from(b64Encoded, 'base64').toString();
};

module.exports = fn;
