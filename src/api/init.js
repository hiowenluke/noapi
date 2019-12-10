
// Add apiFn() if the /api/xxx/xxx.js is not a function.

const data = require('../data');

// If the api js file content is empty, it will be automatically set to the following apiFn.
// If the user writes his own api function, he needs to be aware that he must
// passes the parameter query when calling global.biz.do()
const apiFn = async (query) => {
	return await data.global.biz.do(query);
};

const fixFn = (apis) => {
	if (!apis) return;

	Object.keys(apis).forEach(key => {
		const obj = apis[key];

		// Only handles the object (because if it is a function, it is the function of the api,
		// which meets the expectations and does not need to be processed)
		if (typeof obj === 'object') {

			// If its an empty object, indicating that the content of this js file
			// is empty (expected to be function), set it to apiFn
			if (Object.keys(obj).length === 0) {
				apis[key] = apiFn;
			}
			else {
				// Recursive execution with child nodes
				fixFn(obj);
			}
		}
	});
};

const fn = () => {
	fixFn(data.core.api);
};

module.exports = fn;
