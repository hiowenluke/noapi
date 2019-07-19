
## How To Run This Example

1. Run it:
```sh
cd /path/to/noapi/examples/04-preprocess-query-with-aha
node app.js
```



2. Open the api files in ./api directory, see the test url(s) like below:

[http://localhost:3000/bill/form/crud?formname=trader]()

```json
{
	"success": true,
	"data": {
		"formName": "trader",
		"tableName": "tbl_trader",
		"billName": "trader",
		"isBill": true,
		"isInfo": false
	}
}
```

[http://localhost:3000/bill/dropdownlist?formName=paymethod]()

```json
{
    "success": true,
    "data": [
        "Cash",
        "MasterCard"
    ]
}
```

[http://localhost:3000/info/form/crud?formName=goods]()

```json
{
    "success": true,
    "data": {
        "formName": "goods",
        "tableName": "tbl_goods",
        "infoName": "goods",
        "isBill": false,
        "isInfo": true,
        "isShowBom": true
    }
}
```

[http://localhost:3000/info/form/crud?formName=employee]()

```json
{
    "success": true,
    "data": {
        "formName": "employee",
        "tableName": "tbl_employee",
        "infoName": "employee",
        "isBill": false,
        "isInfo": true,
        "isShowBom": false
    }
}
```

[http://localhost:3000/info/dropdownlist?formName=employee]()

```json
{
    "success": true,
    "data": [
        "Captain America",
        "Iron Man",
        "Thor"
    ]
}
```
