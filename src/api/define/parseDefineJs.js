
const _ = require('lodash');
const v = require('voca');
const data = require('../../data');
const lib = require('../../__lib');

const getVerifyFn = {
	forMatchingResultExactly(item) {
		return (resultText, result) => {
			let comparisonResult = item.result;
			let comparisonFile = item.resultComparisonFile;

			// If the target is a comparison file:
			// 		"bill.form.crud" => "/path/to/user project/test/comparison/bill.form.crud.json"
			if (typeof comparisonResult === 'string' || comparisonFile) {
				const filename = comparisonResult || comparisonFile;
				const testRoot = data.testRoot;

				// Require the comparison file
				comparisonResult = require(testRoot + `/comparison/${filename}.json`);
			}

			// Both must match exactly
			return _.isEqual(result, comparisonResult);
		}
	},

	forContainingKeyValues(expectedData) {
		return (resultText, result) => {
			let isOK = true;

			// Result must contains the property value in expectedData
			Object.keys(expectedData).find(key => {
				if (!_.isEqual(expectedData[key], result[key])) {
					isOK = false;
					return key;
				}
			});

			return isOK;
		}
	},

	forContainingString(expectedString) {
		return (resultText, result) => {
			return resultText.indexOf(expectedString) >= 0;
		}
	},

	forRegExp(reg) {
		return (resultText, result) => {
			return reg.test(resultText);
		}
	}
};

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
		const testInfos = [];
		apiDefineArr.forEach(item => {
			if (!_.isPlainObject(item)) return;

			let test;

			// If the test property is omitted
			if (!item.test) {

				// The result returned from server must be matches the result property exactly
				if (item.result || item.resultComparisonFile) {
					test = {
						verify: getVerifyFn.forMatchingResultExactly(item)
					};
				}
			}
			else {
				// There is a test property
				test = item.test;

				// test: {
				// 		...
				// }
				if (_.isPlainObject(test)) {

					// A simple object:
					// 		test: {
					// 				formname: "trader",
					//				// verify, // without verify
					// 		}
					if (!test.verify) {
						test = {
							verify: getVerifyFn.forContainingKeyValues(test)
						}
					}
					else {
						// A standard test object:
						// 		test: {
						// 				beforeDo,
						// 				url,
						// 				getResult,
						// 				afterDo,
						// 				verify, // with verify (multiple forms)
						// 		}

						// verify(resultText, result) {
						// 		...
						// }
						if (typeof test.verify === 'function') {
							// do nothing
						}

						// verify: {
						// 		formname: 'trader',
						// }
						if (_.isPlainObject(test.verify)) {
							test.verify = getVerifyFn.forContainingKeyValues(test.verify);
						}

						// verify:
						// 		`"formname":"trader"`,
						if (typeof test.verify === 'string') {
							test.verify = getVerifyFn.forContainingString(test.verify);
						}

						// verify:
						// 		/(traderid)|(goodsid)/,
						if (test.verify instanceof RegExp) {
							test.verify = getVerifyFn.forRegExp(test.verify);
						}
					}
				}
				else {

					// test(resultText, result) {
					// 		...
					// }
					if (typeof test === 'function') {
						test = {
							verify: test
						}
					}

					// test: {
					// 		formname: 'trader',
					// }
					if (_.isPlainObject(test)) {
						test = {
							verify: getVerifyFn.forContainingKeyValues(test)
						}
					}

					// test:
					// 		`"formname":"trader"`,
					if (typeof test === 'string') {
						test = {
							verify: getVerifyFn.forContainingString(test)
						};
					}

					// test:
					// 		/(traderid)|(goodsid)/,
					if (test instanceof RegExp) {
						test = {
							verify: getVerifyFn.forRegExp(test)
						};
					}
				}
			}

			testInfos.push(test);
		});

		return testInfos;
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
