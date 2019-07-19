
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
