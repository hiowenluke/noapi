
const parse = require('./parse');

/** @name define.load */
const fn = () => {
	const definitions = parse();
	if (!definitions) return;

	const apiPaths = definitions.map(item => item.apiPaths);
};

module.exports = fn;
