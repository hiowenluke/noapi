
// Check if the url belongs to the specified path range
/** @name noapi.url.isMyPath */
const fn = (url, pathStr) => {

	debugger;

	// The url is query
	if (typeof url === 'object' && (url.originalUrl || url.originalurl)) {
		url = url.originalUrl;
	}

	// "/mms/bom/form/saveData/detail/(insert)|(update)" =>
	// "^\\/mms\\/bom\\/form\\/saveData\\/detail\\/(insert)|(update)\\?"
	const regStr = '^' + pathStr.replace(/\//g, '\\/') + '\\?';
	const reg = new RegExp(regStr, "i"); //

	return reg.test(url);
};

module.exports = fn;
