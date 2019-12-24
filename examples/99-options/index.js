
const noapi = require('../noapi');

const name = 'myApi';
const dir = './src';
const host = '127.0.0.1';
const port = 3001;
const isSilence = true;

// The number and order of parameters can be arbitrary
noapi(name, dir, host, port, isSilence);

// It is equivalents to:
// 		const options = {
// 			name: 'myApi',
// 			dir: './src',
// 			host: '127.0.0.1',
// 			port: 3001,
// 			isSilence: true,
// 		};
//
// 		noapi(options);
