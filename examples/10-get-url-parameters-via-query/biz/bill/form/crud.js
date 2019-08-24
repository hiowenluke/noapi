
// Note that the name of parameter must be "query"
const fn = async (query) => {
	const formName = query.formName;
	const obj = JSON.parse(query.obj);
	const arr = JSON.parse(query.arr);
	return {formName, obj, arr};
};

module.exports = fn;
