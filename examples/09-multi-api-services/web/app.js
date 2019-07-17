
const noapi = require('../../../src'); // require('noapi')

const options = {
	public: {
		name: '/',
		path: './www',
	}
};

noapi(options);
