
const path = require('path');

const me = {
	name: 'default',
	port: 3000,
	isSilence: false, // Do not print logs if it is true
	webServiceRoot: '', // The root path of web service

	init(pathToCaller, args = []) {
		this.webServiceRoot = path.resolve(pathToCaller, '..');

		let name, port, isSilence;

		if (typeof args[0] === 'object') {
			({name, port, isSilence} = args[0]);
		}
		else {
			args.forEach(arg => {
				const type = typeof arg;
				if (type === 'number') {
					port = arg;
				}
				else if (type === 'string') {
					name = arg;
				}
				else if (type === 'boolean') {
					isSilence = arg;
				}
			});
		}

		name && (this.name = name);
		port && (this.port = port);
		isSilence && (this.isSilence = isSilence);
	},
};

module.exports = me;
