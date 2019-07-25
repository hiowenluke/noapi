
const _ = require('lodash');
const v = require('voca');
const data = require('../../../data');
const lib = require('../../../__lib');
const forTest = require('kdo').obj(module, './forTest');

const parseDefineJs = {
	do(type) {
		const method = 'for' + v.titleCase(type); // apiInfos => forApiInfos

		data.sysNames.forEach(sysName => {
			const defineJs = data.defineJs[sysName];
			const filename = defineJs.filename;
			if (!filename) return;

			let apiDefineArr = require(filename);

			// 'http://localhost:3000/xxx' => ['http://localhost:3000/xxx']
			if (!Array.isArray(apiDefineArr)) {
				apiDefineArr = [apiDefineArr];
			}

			defineJs[type] = this[method](apiDefineArr);
		});
	},

	forApi(apiDefineArr) {
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

	forIo(apiDefineArr) {
		const ioInfos = [];
		apiDefineArr.forEach(item => {
			if (!_.isPlainObject(item)) return;

			let {params, result} = item;
			ioInfos.push({params, result});
		});

		return ioInfos;
	},

	forTest(apiDefineArr) {
		return forTest.parseTestInfos(apiDefineArr);
	},
};

/** @name define.parseDefineJs */
const me = {
	forRun() {
		parseDefineJs.do('api');
	},

	forTest() {
		parseDefineJs.do('api');
		parseDefineJs.do('io');
		parseDefineJs.do('test');
	},
};

module.exports = me;
