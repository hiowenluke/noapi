
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
				const testRoot = data.testRoot;

				// Require the comparison file
				comparisonResult = require(testRoot + `/comparison/${filename}.json`);
			}

			// Both must match exactly
			return _.isEqual(result, comparisonResult);
		}
	},

	forContainingKeyValues(expectedData) {
		return (result, resultText) => {
			let isOK = true;

			// Result must contains the property value in expectedData
			Object.keys(expectedData).find(key => {
				if (!_.isEqual(expectedData[key], result.data[key])) {
					isOK = false;
					return key;
				}
			});

			return isOK;
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
