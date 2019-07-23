
// "/bill/form/crud" => {bill: {form: crud: {}}}

/** @name lib.parseApiPathToObject */
const fn = (apiPath) => {
	const obj = {};
	let parent = obj;

	const nodes = apiPath.split('/'); // ['', 'bill', 'form', 'crud']
	while (nodes.length) {
		const node = nodes.shift();
		if (node === '') continue;

		parent[node] = {};
		parent = parent[node];
	}

	return obj;
};

module.exports = fn;
