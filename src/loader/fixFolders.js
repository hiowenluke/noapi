
const fs = require('fs');
const fx = require('fs-extra');
const path = require('path');
const kdo = require('kdo');
const data = require('../data');

const paths = {
	apiServiceRoot: '',

	init(apiServiceRoot) {
		this.apiServiceRoot = apiServiceRoot;
	},

	getTemplatePath() {
		return path.resolve(__dirname, '../__template');
	},

	getApiPath() {
		return path.resolve(this.apiServiceRoot + '/api');
	},

	getBizPath() {
		return path.resolve(this.apiServiceRoot + '/biz');
	},

	getTestPath() {
		return path.resolve(this.apiServiceRoot + '/test');
	},

	getPackageJson() {
		return path.resolve(this.apiServiceRoot + '/package.json');
	}
};

const cloneApiBizFromTemplate = () => {
	const templatePath = paths.getTemplatePath();
	const apiPath = paths.getApiPath();
	const bizPath = paths.getBizPath();

	fx.copySync(templatePath + '/api', apiPath);
	fx.copySync(templatePath + '/biz', bizPath);

	// Update scripts.test in package.json
	const pkgJson = paths.getPackageJson();
	const pkg = require(pkgJson);
	if (pkg.scripts.test.indexOf('no test specified') >= 0) {
		pkg.scripts.test = "cd test && mocha . --exit";

		const content = JSON.stringify(pkg, null, 2);
		fs.writeFileSync(pkgJson, content, 'UTF-8');
	}

	// Show some tips for new user
	data.serverOptions.prompt = data.promptForNewUser;
};

const fixFolders = {
	api() {
		// If there is no api directory
		let apiPath = paths.getApiPath();
		if (!fs.existsSync(apiPath)) {

			// No biz directory too
			let bizPath = paths.getBizPath();
			if (!fs.existsSync(bizPath)) {

				// clone api and biz directory from template
				cloneApiBizFromTemplate();
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
			const templatePath = paths.getTemplatePath();
			fx.copySync(templatePath + '/test', testPath);

			const indexJs = testPath + '/index.js';
			let content = fs.readFileSync(indexJs, 'UTF-8');

			// Remove the comments in index.js
			// 		The require('noapi') in index.js was commented to avoid error.
			content = content
				.replace('// const noapi', 'const noapi')
				.replace('// noapi.', 'noapi.')
			;

			fs.writeFileSync(indexJs, content, 'UTF-8');
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
