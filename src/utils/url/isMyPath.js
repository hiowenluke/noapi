
const isStartWith = require('./isStartWith');

// Check if the url is the specified path
//		url:		/mms/bom/form/saveData/detail?billid=123&act=delete
//		pathStr:	/mms/bom/form/saveData/detail

/** @name noapi.url.isMyPath */
const fn = (url, pathStr) => {

	// Append '?' at the end of pathStr
	// /mms/bom/form/saveData/detail => /mms/bom/form/saveData/detail?
	return isStartWith(url, pathStr + '?');
};

module.exports = fn;
