
const noapi = require('../noapi');

const options = {
	power(query, req, res) {

		// 给 query 添加小写参数，但不移除原来的大写参数（query.formName => query.formname）
		noapi.params.attachLowerCase(query);
	}
};

// So simple!
const server = noapi(options);

// Exports the http server for testing via supertest
module.exports = server;
