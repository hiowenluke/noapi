
// "/bill/form/crud" => {bill: {form: crud: {}}}

/** @name lib.parseApiPathToObject */
const fn = (apiPath) => {
	const obj = {};
	let parent = obj;

	const nodes = apiPath.split('/');
	while (nodes.length) {
		const node = nodes.shift();
		parent[node] = {};
		parent = parent[node];
	}

	return obj;
};

module.exports = fn;
