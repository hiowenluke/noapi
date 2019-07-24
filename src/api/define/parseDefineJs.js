
const _ = require('lodash');
const v = require('voca');
const data = require('../../data');
const lib = require('../../__lib');

const parseDefineJs = {
	do(type) {
		const method = 'for' + v.titleCase(type); // apiInfos => forApiInfos

		data.sysNames.forEach(sysName => {
			const apiDefineJsPath = data.core[sysName].apiDefineJsPath;
			if (!apiDefineJsPath) return;

			let apiDefineArr = require(apiDefineJsPath);

			// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
			if (!Array.isArray(apiDefineArr)) {
				apiDefineArr = [apiDefineArr];
			}

			data.core[sysName][type] = this[method](apiDefineArr);
		});
	},

	forApiInfos(apiDefineArr) {
		const apiInfos = [];
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

		return apiInfos;
	},

	forIoInfos() {

	},

	forTestInfos() {

	},
};

/** @name define.parseDefineJs */
const me = {
	forRun() {
		parseDefineJs.do('apiInfos');
	},

	forTest() {
		parseDefineJs.do('apiInfos');
		parseDefineJs.do('ioInfos');
		parseDefineJs.do('testInfos');
	},
};

module.exports = me;
