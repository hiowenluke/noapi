
// Test url
// http://localhost:3000/do/somethingIsWrong

const fn = async (query) => {
	return {error: 'something is wrong'};
};

module.exports = fn;
