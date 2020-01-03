
const fn = (str) => {
	return Buffer.from(str).toString('base64');
};

module.exports = fn;
