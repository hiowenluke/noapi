
## Directory Structure

/api    
    Api service of my-project.
    Owner: owen@myproject.com

/web    
    Web service of my-project.
    Owner: luke@myproject.com



## How To Run This Example

1. Run it:
```sh

# Note that the endding is /web
cd /path/to/noapi/exmaples/08-indenpendent-web-api-service/web

node app.js
```



2. Open an api file such as ./api/api/bill/form/crud.js, see the test url(s) like below:
```
http://localhost:3000/bill/form/crud?formname=trader
```



3. Visit it in your browser, then get the result like below:
```
{
	"success": true,
	"data": {
		"formname": "trader"
	}
}
```
