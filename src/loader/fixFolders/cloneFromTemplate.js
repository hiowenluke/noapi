
const fs = require('fs');
const fx = require('fs-extra');
const paths = require('./paths');
const data = require('../../data');

const me = {
	apiAndBiz(apiPath, bizPath) {
		const templatePath = paths.getTemplatePath();

		fx.copySync(templatePath + '/api', apiPath);
		fx.copySync(templatePath + '/biz', bizPath);

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
