
// Note that the name of parameter must be "query"
const fn = async (query) => {
	const formname = query.formname;
	const obj = JSON.parse(query.obj);
	const arr = JSON.parse(query.arr);
	return {formname, obj, arr};
};

module.exports = fn;
