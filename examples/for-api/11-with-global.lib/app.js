
// The noapi will load options.globalLib as global.lib so that you can use them like below:
//		global.lib.tools.hi();

// instead of :
//		const hi = require('../../../lib/tools/hi');
//		hi();

const options = {
	globalLib: 'lib'
};

require('../noapi')(options);
