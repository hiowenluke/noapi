/*
	Test url
		http://localhost:3000/say/hi?name=owen&age=100

	Expected results
		{
			"success": true, // The state of the result
			"data": {        // The data of the result
				"msg": "Hi, I'm owen, 100 years old."
			}
		}

	Arguments
		name 		user name, must be a string with a maximum length of 32

		age			user age, must be a number with a maximum of 200

*/
