
const fs = require('fs');
const data = require('../data');

const getPublicFolder = () => {
	const publicFolder = data.webServiceRoot + '/public';
	return fs.existsSync(publicFolder) ? publicFolder : null;
};

const me = {
	init(express, expressApp) {
		const options = data.serverOptions;

		if (!options.public) {
			const publicFolder = getPublicFolder();
			if (publicFolder) {
				options.public = {
					path: '/',
					folder: publicFolder,
				}
			}
			else {
				return;
			}
		}

		else

		if (typeof options.public === 'object') {

			// options.public = {folder}, without path
			if (!options.public.path) {

				// Use the root path of project as public path
				options.public.path = '/';
			}
			else {
				// do nothing
			}
		}

		else

		// If options.public is string, it is a public folder
		if (typeof options.public === 'string') {
			const pathToPublic = options.public;
			options.public = {
				path: '/',
				folder: pathToPublic,
			}
		}

		if (options.public.path === '/') {
			options.public.path = '';
		}

		if (!/^[.\/]/.test(options.public.folder)) {
			options.public.folder = './' + options.public.folder;
		}

		expressApp.use('/' + (options.public.path || ''), express.static(options.public.folder));
	}
};

module.exports = me;
