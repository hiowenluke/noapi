/**
 * @test
 	http://localhost:3000/say/hi2?name=owen&age=100

 * @returns
	{
		"success": true,
		"data": {
			"msg": "Hi, I'm owen, 100 years old.",
			"reversed": ".dlo sraey 001 ,newo m'I ,iH",
			"encoded": "SGksIEknbSBvd2VuLCAxMDAgeWVhcnMgb2xkLg=="
		}
	}

 * @param {String} 	name 	user's name with a maximum length of 32
 * @param {Integer} age		user's age with a maximum of 200
 * */
