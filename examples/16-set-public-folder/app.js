
// If there is a folder "public" under the root of project, it will be loaded as a express static resource.
//		1. If a path was specified as "xxx", the url corresponds to it is http://localhost:3000/xxx .
//		2. If no path was specified, the url corresponds to it is http://localhost:3000 .

// You can specify another folder such as "web" to replace it.
// Try each of options below to learn more.

const options1 = {
	public: 'web' // <- http://localhost:3000
};

// Equivalent to options1
const options2 = {
	public: {

		// Specify the public folder
		folder: 'web' // <- http://localhost:3000
	}
};

// Full public options
const options3 = {
	public: {

		// Specify the public folder
		folder: 'web',

		// Specify the public path
		path: 'public', // <- http://localhost:3000/public
	}
};

// Full public options
const options4 = {
	public: {

		// Specify the public folder
		folder: 'web',

		// Specify the public path
		path: 'xxx', // <- http://localhost:3000/xxx
	}
};

// So simple!
const server = require('../noapi')(options4);

// Exports the http server for testing via supertest
module.exports = server;
