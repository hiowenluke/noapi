
// The parameter names in functions correspond to the
// parameters defined in "url" or "params" in define.js.

const fn = async (username, password) => {
	if (!username || !password) {
		return {error: 'Require username and password'};
	}

	return {username, password};
};

module.exports = fn;
