
const data = require('../../data');

// If the api js file content is empty, it will be automatically set to the following apiFn.
// If the user writes his own api function, he needs to be aware that he must
// passes the parameter query when calling global.biz.do()
const apiFn = async (query) => {
	return await global.biz.do(query);
};

const handle = (apis) => {
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
				handle(obj);
			}
		}
	});
};

// Add function to all project apis (if the api's js file content is empty)
/** @name me.fixFn */
const fn = () => {
	const sysNames = data.sysNames; // ["forms", "mms", ...]
	sysNames.forEach(sysName => { // "forms"
		handle(data.core[sysName].api) // data.core.forms.api
	});
};

module.exports = fn;
