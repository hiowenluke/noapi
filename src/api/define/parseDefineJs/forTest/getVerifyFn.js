
const _ = require('lodash');
const data = require('../../../../data');

const me = {
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

module.exports = me;
