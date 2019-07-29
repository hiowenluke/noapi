
const order = [
	'convertToLowerCaseParams',
	'attachTableName',
	'setApiType',
];

// Use kdo to execute the functions in current directory with order.
module.exports = require('kdo').flow(order);
