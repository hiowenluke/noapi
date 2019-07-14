
## How To Run These Examples

1. Take examples/01 as an example:
```sh
cd /path/to/noapi/examples/01
node app.js
```



2. See the test url in file examples/01/api/bill/form/crud.js:
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
