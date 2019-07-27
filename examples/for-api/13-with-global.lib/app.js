
// Noapi loads options.globalLib as global.lib so that you can use it like below:
//		global.lib.tools.hi();

// instead of require a long path like below:
//		const hi = require('../../../lib/tools/hi');
//		hi();

const options = {
	globalLib: 'lib'
};

// So simple!
const server = require('../noapi')(options);

// Exports the http server for testing via supertest
module.exports = server;
