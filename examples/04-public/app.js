
const noapi = require('../../src'); // require('noapi)

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

noapi(options);
