
const fs = require('fs');
const data = require('../data');

const getPublicPath = () => {
	const publicPath = data.webServiceRoot + '/public';
	return fs.existsSync(publicPath) ? publicPath : null;
};

const me = {
	init(express, expressApp) {
		const options = data.serverOptions;

		if (!options.public) {
			const publicPath = getPublicPath();
			if (publicPath) {
				options.public = {
					name: 'public',
					path: publicPath,
				}
			}
			else {
				return;
			}
		}

		else

		if (typeof options.public === 'object') {

			// options.public = {path}, without name
			if (!options.public.name) {
				options.public.name = 'public';
			}

			else

			// Use the root folder of project as public folder
			if (options.public.name === '/') {
				options.public.name = '';
			}
			else {
				// do nothing
			}
		}

		else

		// If options.public is string, it is a path to public
		if (typeof options.public === 'string') {
			const pathToPublic = options.public;
			options.public = {
				name: 'public',
				path: pathToPublic,
			}
		}

		expressApp.use('/' + (options.public.name || ''), express.static(options.public.path));
	}
};

module.exports = me;
