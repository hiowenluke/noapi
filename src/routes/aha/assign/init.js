
const fs = require('fs');
const data = require('../../../data');

/** @name me.assign.init */
const fn = () => {

	const root = data.projectRoot;
	const serverNames = data.serverNames; // ["api-forms", "api-mms", ...]
	const sysNames = data.sysNames; // ["forms", "mms", ...] // 也即 serverName 去掉了前缀 "api-"

	// The aha/assign.js for all projects is loaded as data.xxx.aha.assgin
	serverNames.forEach((serverName, index) => {
		const assignFilePath = root + '/' + serverName + '/aha/assign.js';
		if (fs.existsSync(assignFilePath)) {
			const sysName = sysNames[index]; // "forms"

			// Load as data.core.xxx.aha.assgin, for example data.core.forms.aha.assign.
			// If the project has an aha directory, the data.xxx.aha object has already been created,
			// so we can set assign directly here.
			data.core[sysName].aha.assign = require(assignFilePath);
		}
	});
};

module.exports = fn;
