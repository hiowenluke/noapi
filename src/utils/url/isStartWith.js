
// Check if the url is the specified path
//		url:		/mms/bom/form/saveData/detail?billid=123&act=delete
//		startStr:	/mms

/** @name noapi.url.isStartWith */
const fn = (url, startStr) => {

	// If the url is query (originalUrl may be converted to originalurl)
	if (typeof url === 'object' && (url.originalUrl || url.originalurl)) {
		url = url.originalUrl || url.originalurl;
	}

	// "/mms/bom/form/saveData/detail/(insert)|(update)" =>
	// "^\\/mms\\/bom\\/form\\/saveData\\/detail\\/(insert)|(update)\\?"
	const regStr = '^' + startStr.replace(/\?$/, '\\?').replace(/\//g, '\\/');
	const reg = new RegExp(regStr, "i");

	return reg.test(url);
};

module.exports = fn;
