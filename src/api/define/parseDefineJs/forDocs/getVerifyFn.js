
const _ = require('lodash');
const data = require('../../../../data');

const me = {
	forMatchingResultExactly(doc) {
		return (result, resultText) => {
			let comparisonResult = doc.result;

			// If the target is a comparison file:
			// 		"bill.form.crud" => "/path/to/user project/test/comparison/bill.form.crud.json"
			if (typeof comparisonResult === 'string') {
				const filename = comparisonResult;
				const testRoot = data.testOptions.testRoot;

				// Require the comparison file
				comparisonResult = require(testRoot + `/comparison/${filename}.json`);
			}

			// Both must match exactly
			return _.isEqual(result, comparisonResult);
		}
	},

	forContainingKeyValues(expectedData) {
		return (result, resultText) => {
			let isFound;
			let isOK = true;

			// Result must contains the property value in expectedData
			const item = Object.keys(expectedData).find(key => {
				const value = result.data[key];
				if (typeof value === 'undefined') return;

				isFound = true;

				// Compare with result.data.xxx
				if (!_.isEqual(expectedData[key], value)) {
					isOK = false;
					return key;
				}
			});

			return !isFound ? false : isOK;
		}
	},

	forContainingString(expectedString) {
		return (result, resultText) => {
			return resultText.indexOf(expectedString) >= 0;
		}
	},

	forRegExp(reg) {
		return (result, resultText) => {
			return reg.test(resultText);
		}
	},

	forResultState(expectedResultState) {
		return (result, resultText) => {
			return result.success === expectedResultState;
		}
	}
};

module.exports = me;
