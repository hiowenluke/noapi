
const lib = require('./');

// Attach params to title if it is exits
/** @name lib.attachParamsToTitle */
const fn = (title, url, params) => {

	// There is no parameters in url
	if (url && url.indexOf('?') === -1 && params) {
		title += ' // ' + lib.convertParamsToKeyValues(params);
	}

	return title;
};

module.exports = fn;
