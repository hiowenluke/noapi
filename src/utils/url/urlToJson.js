
const utils = require('..');

// Convert url to json object
// "/mms/bom/form/getData?goodsid=10" => {mms.bom.form.getData}

/** @name noapi.url.urlToJson */
const fn = (url) => {

	// "/mms/bom/form/getData?goodsid=10" => "/mms/bom/form/getData"
	url = (url + '?').split('?')[0];

	// "/mms/bom/form/getData" => {mms.bom.form.getData}
	return utils.url.pathsToJson(url);
};

module.exports = fn;
