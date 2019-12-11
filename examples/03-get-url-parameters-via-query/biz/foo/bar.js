
// All parameters in url are attached to the function argument "query".

//                                 query.name  query.obj                   query.arr
// http://localhost:3000/foo/bar ? name=owen & obj={"date":"2019-05-01"} & arr=[1,"abc",{"tel":12345678}]'

const fn = async (query) => {
	const {name, obj, arr} = query;
	return {name, obj, arr};
};

module.exports = fn;
