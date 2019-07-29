
const v = require('voca');
const data = require('../../../data');
const forApi = require('./forApi');
const forDocs = require('kdo')('./forDocs');

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
		return forApi.parse(apiDefineArr);
	},

	forDocs(apiDefineArr) {
		return forDocs.parse(apiDefineArr);
	},
};

/** @name define.parseDefineJs */
const me = {

	// defineJs: {api}
	forRun() {
		parseDefineJs.do('api');
	},

	// defineJs: {api, docs}
	forTest() {
		parseDefineJs.do('api');
		parseDefineJs.do('docs');
	},
};

module.exports = me;
