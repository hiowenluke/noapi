
const _ = require('lodash');
const data = require('../../data');
const lib = require('../../__lib');

/** @name define.parse */
const me = {
	forApiInfos() {
		if (data.apiDefineJsPaths.length === 0) return;

		const apiInfos = [];
		data.apiDefineJsPaths.forEach(defineJsPath => {
			let apiDefineArr = require(defineJsPath);

			// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
			if (!Array.isArray(apiDefineArr)) {
				apiDefineArr = [apiDefineArr];
			}

			apiDefineArr.forEach(item => {

				// api: /bill/form/crud
				// url: http://localhost:3000/bill/form/crud?formname=trader
				if (typeof item === 'string') {
					const {api, title, url} = lib.urlParser.getApiTitleUrlFromString(item);
					apiInfos.push({api, title, url});
				}

				// {api, title, url}
				if (_.isPlainObject(item)) {
					let {api, title, url} = item;

					// There must be at least one api and url.
					if (!api && !url) return;

					if (!api) { // There is a url
						api = lib.urlParser.getApiFromUrl(url);
					}
					else { // There is a api
						url = lib.urlParser.getUrlFromApi(api);
					}

					title = lib.urlParser.getTitleFromApi(api);
					apiInfos.push({api, title, url});
				}
			});
		});

		return apiInfos;
	},

	forAll() {

	}
};

module.exports = me;
