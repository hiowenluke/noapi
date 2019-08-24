
const fn = async (formName) => {
	// do something
	// ...
	// return the result to client
	return {myFormName: 'my_' + formName};
};

module.exports = fn;
