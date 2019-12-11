
// Test url
// http://localhost:3000/say/hi?name=owen&age=100

const fn = async (query) => {
	return {msg: `Hi, I'm ${query.name}, ${query.age} years old.`};
};

module.exports = fn;
