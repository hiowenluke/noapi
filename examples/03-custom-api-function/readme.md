
## How To Run This Example

1. Run it:
```sh
cd /path/to/noapi/examples/03-custom-api-function
node app.js
```



2. Open an api file such as ./api/bill/form/crud.js, see the test url(s) like below:

[http://localhost:3000/bill/form/crud?formname=trader]()

```json
{
    "success": true,
    "data": {
        "formName": "trader",
        "requestTime": 1563531028955
    }
}
```
