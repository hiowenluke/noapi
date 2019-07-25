
const _ = require('lodash');
const getVerifyFn = require('./getVerifyFn');

/** @name forTest.parseTestInfos */
const fn = (apiDefineArr) => {
	const testInfos = [];

	apiDefineArr.forEach(item => {
		if (!_.isPlainObject(item)) return;

		let io;
		let test;

		// io: input params, output result
		io = {params: item.params, result: item.result};

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

		testInfos.push({io, test});
	});

	return testInfos;
};

module.exports = fn;
