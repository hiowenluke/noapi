/*
	test url
	http://localhost:3000/bill/form/crud?formname=trader

* */

// If the api function is omitted, noapi will automatically use the following function:
// 		const fn = async (query) => {
// 			return await global.biz.do(query);
// 		};

// A custom api function likes below:
const fn = async (query) => {

	// Do something
	query.isReturnRequestTime = true;

	// Use global.biz.do to calls the biz function with the same path as the api function. So simple!
	const result = await global.biz.do(query);

	return result;
};

module.exports = fn;
