
## How To Run These Examples

1. Take "examples/01-basic" as an example:
```sh
cd /path/to/noapi/examples/01-basic
node app.js
```

**Note:**
For examples 05 and 06, do the following:

```sh
cd /path/to/noapi/examples/05-separate-web-api-service/web
cd /path/to/noapi/examples/06-multi-api-services/web
```



2. See the test url in file "examples/01-basic/api/bill/form/crud.js":
```
http://localhost:3000/bill/form/crud?formname=trader
```



3. Visit it in your browser, get the result from it: 
```
{
	"success": true,
	"data": {
		"formname": "trader"
	}
}
```



Note:

