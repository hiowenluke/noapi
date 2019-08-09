
## Directory Structure

In this example, the api service and web service are separated projects. the directory structure like below:

```
/Root
    /api-erp   
        ... 
        // ERP api service
        // Owner: captain.ameria@theavengers.com
    
    /api-forms
        ... 
        // Forms api service
        // Owner: iron.man@theavengers.com
    
    /web    
        ... 
        // Web service
        // Owner: thanos@theavengers.com
```

Since api-erp needs to call api-forms, therefore:
```
1. The api-froms can still be run and tested separately.
2. We need to run the whole project to run and test api-erp.
```



## How To Run This Example

As same as the previous examples, like below:

```sh
cd /path/to/noapi/examples/12-call-api-in-other-api-services

# Run it
node .

# Test it
npm test
```

