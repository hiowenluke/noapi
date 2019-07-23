
const data = require('../data');

const me = {
	init(express, expressApp) {
		const options = data.serverOptions;
		if (!options.public) return;

		if (typeof options.public === 'object') {

			// options.public = {path}, without name
			if (!options.public.name) {
				options.public.name = 'public';
			}

			// Use the root folder of project as public folder
			if (options.public.name === '/') {
				options.public.name = '';
			}
		}

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
