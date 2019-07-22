
## Directory Structure

/api-erp    
    ERP api service
    Owner: captain.ameria@theavengers.com

/api-forms
    Forms api service
    Owner: iron.man@theavengers.com

/api-mms
    MMS api service
    Owner: thor@theavengers.com

/web    
    Web service
    Owner: thanos@theavengers.com



## How To Run This Example

1. Run it:
```sh

# Note that the endding is /web
cd /path/to/noapi/exmaples/09-multi-api-services/web

node app.js
```



2. Open the api files in ./api-xxx/api directories, see the test url(s) like below:

[http://localhost:3000/erp:/report/purchase/order?billid=1]()

```json
{
	"success": true,
	"data": {
		"billid": "1"
	}
}
```

[http://localhost:3000/forms:/bill/form/crud?formname=trader]()

```json
{
    "success": true,
    "data": {
      "formName": "trader"
    }
}
```

[http://localhost:3000/mms:/mrp/calc?goodsid=1]()

```json
{
    "success": true,
    "data": {
      "goodsid": "1"
    }
}
```
