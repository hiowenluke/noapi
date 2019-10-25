
const fs = require('fs');
const fx = require('fs-extra');
const paths = require('./paths');
const data = require('../../data');

const me = {
	apiAndBiz(apiPath, bizPath) {
		const templatePath = paths.getTemplatePath();

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
		const prompt = require(templatePath + '/readme');
		data.serverOptions.prompt = prompt;
	},

	test(testPath) {
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
};

module.exports = me;
