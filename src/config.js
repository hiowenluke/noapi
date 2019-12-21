
const path = require('path');

const me = {
	name: 'default',
	host: 'localhost',
	port: 3000,
	isSilence: false, // Do not print logs if it is true
	webServiceRoot: '', // The root path of web service

	init(pathToCaller, args = []) {
		this.webServiceRoot = path.resolve(pathToCaller, '..');

		let name, host, port, isSilence;

		if (typeof args[0] === 'object') {
			({name, host, port, isSilence} = args[0]);
		}
		else {
			args.forEach(arg => {
				const type = typeof arg;
				if (type === 'number') {
					port = arg;
				}
				else if (type === 'string') {
					if (arg === 'localhost' || arg.indexOf('.') >= 0) {
						host = arg;
					}
					else {
						name = arg;
					}
				}
				else if (type === 'boolean') {
					isSilence = arg;
				}
			});
		}

		name && (this.name = name);
		host && (this.host = host);
		port && (this.port = port);
		isSilence && (this.isSilence = isSilence);
	},
};

module.exports = me;
