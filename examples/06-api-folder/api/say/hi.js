/**
 * @test
 	http://localhost:3000/say/hi?name=owen&age=100

 * @returns
	{
		"success": true,
		"data": {
			"msg": "Hi, I am owen, 100 years old.",
			"reversed": ".dlo sraey 001 ,newo ma I ,iH",
			"encoded": "SGksIEkgYW0gb3dlbiwgMTAwIHllYXJzIG9sZC4="
		}
	}

 * @param {String} 	name 	user's name with a maximum length of 32
 * @param {Integer} age		user's age with a maximum of 200
 * */
