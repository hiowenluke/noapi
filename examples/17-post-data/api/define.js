
// The following three definitions have the same result.
// We only need to choose one of the definitions.

// 		This means that noapi can handle both GET requests and
// 		POST requests, no matter which way to define the api.

// 		In other words, the client can arbitrarily change the way the data
// 		is submitted, and the server does not need to make any changes.

// See "04-define-API-and-test-cases-[completely]" to learn more.

const definition1 = {
	url: 'http://localhost:3000/register?username=owenluke&password=123456',
	result: {
		"success": true,
		"data": {
			"username": "owenluke",
			"password": "123456"
		}
	}
};

const definition2 = {
	api: '/register',

	params: {
		username: 'owenluke',
		password: '123456'
	},

	result: {
		"success": true,
		"data": {
			"username": "owenluke",
			"password": "123456"
		}
	}
};

const definition3 = {
	url: 'http://localhost:3000/register',

	params: {
		username: 'owenluke',
		password: '123456'
	},

	result: {
		"success": true,
		"data": {
			"username": "owenluke",
			"password": "123456"
		}
	}
};

const me = [

	// Please replace definition1 with others to see different result.
	definition1
];

module.exports = me;
