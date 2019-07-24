
const _ = require('lodash');
const data = require('../../data');
const lib = require('../../__lib');

/** @name define.parseDefineJs */
const me = {
	forApiInfos() {
		data.sysNames.forEach(sysName => {

			const apiDefineJsPath = data.core[sysName].apiDefineJsPath;
			if (!apiDefineJsPath) return;

			const apiInfos = [];
			let apiDefineArr = require(apiDefineJsPath);

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

					!title && (title = lib.urlParser.getTitleFromApi(api));
					apiInfos.push({api, title, url});
				}
			});

			data.core[sysName].apiInfos = apiInfos;
		});
	},

	forAll() {

	}
};

module.exports = me;
