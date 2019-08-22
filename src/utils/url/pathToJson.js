
// The difference with lib.apiParser.apiPathToObject() :
// 		the latter only supports parsing of a single path.

// "/bom/form/crud" => {bom: form: crud: {}}
/** @name noapi.url.pathToJson */
const fn = (path, splitter = '/', result) => {
	const nodes = path.split(splitter);
	let obj = result.data;

	nodes.forEach(node => {
		if (!node) return;
		if (!obj[node]) obj[node] = {};
		obj = obj[node];
	});
};

module.exports = fn;
