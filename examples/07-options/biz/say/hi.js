
const fn = async (query) => {
	return {msg: `Hi, I'm ${query.name}, ${query.age} years old.`};
};

module.exports = fn;
