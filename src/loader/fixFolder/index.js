
const fs = require('fs');
const kdo = require('kdo');
const data = require('../../data');
const paths = require('./paths');
const cloneFromTemplate = require('./cloneFromTemplate');

const fixFolders = {
	api() {
		// If there is no api directory
		let apiPath = paths.getApiPath();
		if (!fs.existsSync(apiPath)) {

			// No biz directory too
			let bizPath = paths.getBizPath();
			if (!fs.existsSync(bizPath)) {

				// clone api and biz directory from template
				cloneFromTemplate.apiAndBiz(apiPath, bizPath);
			}
			else {
				// There is biz directory, just create api directory
				fs.mkdirSync(apiPath);
			}
		}
	},

	biz() {
		let bizPath = paths.getBizPath();
		if (!fs.existsSync(bizPath)) {
			fs.mkdirSync(bizPath);
		}
	},

	test() {
		let testPath = paths.getTestPath();
		if (!fs.existsSync(testPath)) {
			cloneFromTemplate.test(testPath);
		}
	}
};

/** @name me.fixFolders */
const fn = () => {
	const serviceNames = data.serviceNames;
	serviceNames.forEach(serviceName => {
		const apiServiceRoot = data.apiServicesRoot[serviceName];
		paths.init(apiServiceRoot);
		kdo.doSync(fixFolders);
	});
};

module.exports = fn;
