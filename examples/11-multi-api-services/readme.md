
## Directory Structure

In this example, the api service and web service are separated projects, each one can be run and tested separately. the directory structure like below:

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
    
    /api-mms
        ... 
        // MMS api service
        // Owner: thor@theavengers.com
    
    /web    
        ... 
        // Web service
        // Owner: thanos@theavengers.com
```

Run and test the api services only:
```sh
cd /path/to/noapi/examples/11-multi-api-services/api-erp

# or
cd /path/to/noapi/examples/11-multi-api-services/api-forms

# or
cd /path/to/noapi/examples/11-multi-api-services/api-mms


# Run it
node .

# Test it
npm test
```

Run and test the web service only:
```sh
cd /path/to/noapi/examples/11-multi-api-services/web

# Run it
node .

# Test it
npm test
```



## How To Run This Example

As same as the previous examples, like below:

```sh
cd /path/to/noapi/examples/11-multi-api-services

# Run it
node .

# Test it
npm test
```



## More Details

In the previous examples (01 - 09), we ran the examples as follows:
```sh
cd /path/to/noapi/examples/xxx
node .
```

In this example, the api service and the web service are separated, we need to start the example as follows:
```sh
cd /path/to/noapi/examples/11-multi-api-services/web # <- Note the ending is /web
node .
```

However, when we switch to this example, we will habitually follow the previous operations and go wrong. Therefore, the shortcuts (index.js and package.json) are provided here. Now, we can run this example as same as the previous examples, like above.
