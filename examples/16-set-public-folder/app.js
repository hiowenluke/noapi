
// If there is a folder "./public", noapi will automatically load it as express static resources,
// and the url corresponds to it is http://localhost:3000/public .

// You can specify another folder such as "./web" or another name "http://localhost:3000/xxx" to replace it.
// Try each of options below to learn more.

const options1 = {
	public: './web' // <- http://localhost:3000/public
};

// Equivalent to options1
const options2 = {
	public: {

		// Specify the public folder
		path: './web' // <- http://localhost:3000/public
	}
};

const options3 = {
	public: {

		// specify the public name
		name: 'xxx', // <- http://localhost:3000/xxx
		path: './web',
	}
};

const options4 = {
	public: {

		// specify the public name
		name: '/', // <- http://localhost:3000/
		path: './web',
	}
};

// So simple!
const server = require('../noapi')(options3);

// Exports the http server for testing via supertest
module.exports = server;
