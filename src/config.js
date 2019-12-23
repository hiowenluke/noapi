
const path = require('path');

const me = {
	name: 'default',
	folder: './biz',
	host: 'localhost',
	port: 3000,
	isSilence: false, // Do not print logs if it is true

	webServiceRoot: '', // The root path of web service

	init(pathToCaller, args = []) {
		this.webServiceRoot = path.resolve(pathToCaller, '..');

		let name, folder, host, port, isSilence;

		if (typeof args[0] === 'object') {
			({name, folder, host, port, isSilence} = args[0]);
		}
		else {
			args.forEach(arg => {
				if (!arg) return;

				const type = typeof arg;
				if (type === 'number') {
					port = arg;
				}
				else if (type === 'boolean') {
					isSilence = arg;
				}
				else if (type === 'string') {
					if (arg.substr(0, 1) === '.') {
						folder = arg;
					}
					else if (arg !== 'localhost' && arg.indexOf('.') === -1) {
						name = arg;
					}
					else {
						host = arg;
					}
				}
			});
		}

		name && (this.name = name);
		folder && (this.folder = folder);
		host && (this.host = host);
		port && (this.port = port);
		isSilence && (this.isSilence = isSilence);
	},
};

module.exports = me;
