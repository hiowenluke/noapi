
const data = require('../data');
const path = require('path');

const me = {
	init(express, expressApp) {
		const root = data.webServiceRoot;
		const publicPath = path.resolve(root, data.serverOptions.public);
		expressApp.use('/', express.static(publicPath));
	}
};

module.exports = me;
