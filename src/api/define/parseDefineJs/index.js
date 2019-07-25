
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
		return forApi.parse(apiDefineArr);
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
