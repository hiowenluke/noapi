
// In the previous examples (01 - 09), we ran the examples as follows:
//		cd /path/to/noapi/examples/xxx
//		node .

// In this example, the api service and the web service are separate,
// we need to start the example as follows:

// 		cd /path/to/noapi/examples/xxx/web # <- Note the ending is /web
// 		node .

// However, when we switch to this example, we will habitually follow
// the previous operations and go wrong.

// Therefore, a shortcut (this index.js file) is provided here.

require('./web');
