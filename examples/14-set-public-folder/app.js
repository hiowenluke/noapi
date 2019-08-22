
const options = {
	public: './public'
};

// Equivalent to:
// 		const options = {
//			public: {
//				path: './public'
//			}
// 		}

// Or:
// 		const options = {
//			public: {
//				name: 'public',
//				path: './public',
//			}
// 		}

// And try this:
// 		const options = {
// 			public: {
// 				name: '/',
// 				path: './public',
// 			}
// 		}

// So simple!
const server = require('../noapi')(options);

// Exports the http server for testing via supertest
module.exports = server;
