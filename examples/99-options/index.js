
const noapi = require('../noapi');

const name = 'myApi'; // default is "default"
const host = '127.0.0.1'; // default is "localhost"
const port = 3001; // default is 3000
const isSilence = true; // default is false

// The number and order of parameters can be arbitrary
noapi(name, host, port, isSilence);

// Equiv to:
// 		const options = {
// 			name: 'myApi',
// 			host: '127.0.0.1',
// 			port: 3001,
// 			isSilence: true,
// 		};
//
// 		noapi(options);
