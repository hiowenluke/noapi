

# Noapi

The easiest framework for [Node](https://nodejs.org) Api app. You can define apis and test cases in a simple way, focus on your great project, no need to care about how to manage api services, web service, routes, test cases, etc. 

Noapi is based on [Express](https://expressjs.com/), you can use all the middleware of Express or write your own middleware and custom routes. (All of them will be executed before noapi). Noapi needs Node 7.6+ for async/await.



## Installation

```sh
npm i noapi --save
```

Test:
```sh
git clone https://github.com/hiowenluke/noapi
cd noapi
npm test
```



## Quick Start

See [01-api-definition-by-array](./examples/01-api-definition-by-array) for more details.


### 1. Define apis

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)



### 2. Write business code

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true)



### 3. Run

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)



### 4. Test

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)



## Demo

### Easy Api Definition By Array

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)



### Easy Api Definition By Object

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo2.jpg?raw=true)



### Easy Api Definition By Directory

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo3.jpg?raw=true)



### Easy Api Definition By Pure Directory (Without Test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo4.jpg?raw=true)



### Easy Api Definition Minimally (Without Test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo5.jpg?raw=true)



### Easy Api Definition Completely (With Full Test Properties)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo6.jpg?raw=true)



### Easy Starting

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)



### Easy Testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)



### Easy Before Do And After Do In Testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo9.jpg?raw=true)




### Easy Multiple Test Cases For One Api

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo10.jpg?raw=true)




## Multi-Api Services

The following demo project consists of 3+ api services. Each api service is a seperate project, which is maintained by different guy and has a clear division of labor.

```
/<Demo Project root>
  /api-forms             <- seperate subproject (api service "forms" subsystem)
    /api
      /bill
        /form
          crud.js           http://localhost:3000/forms:/bill/form/crud
          new.js            http://localhost:3000/forms:/bill/form/new
        dropDownList.js     http://localhost:3000/forms:/bill/dropdownlist
      index.js
          
    /biz
      ...
    index.js
    package.json

  /api-erp               <- seperate subproject (api service "erp" subsystem)
    /api
      /bill
        /mms
          /mnf
            manuPlan.js     http://localhost:3000/erp:/bill/mms/mnf/manuplan
        /purchase
          plan.js           http://localhost:3000/erp:/bill/purchase/plan
          order.js          http://localhost:3000/erp:/bill/purchase/order

        /sales
          plan.js           http://localhost:3000/erp:/bill/sales/plan
          order.js          http://localhost:3000/erp:/bill/sales/order

      /report
        /mms
          /mnf
            /manuPlan
              summary.js    http://localhost:3000/erp:/report/mms/mnf/manuplan/summary
              detail.js     http://localhost:3000/erp:/report/mms/mnf/manuplan/detail
    /biz
      ...
    index.js
    package.json

  /api-xxx               <- seperate subproject (api service "xxx" subsystem)
    ...

  /web                   <- seperate subproject (web service)
    /test
    app.js
    package.json

  README.md
```



## Examples

See [examples](./examples) to learn more.



## The Api Definitions

See the below examples to learn more:
* [01-api-definition-by-array](./examples/01-api-definition-by-array/api/define.js)
* [02-api-definition-by-object](./examples/02-api-definition-by-object/api/define.js)
* [03-api-definition-by-directory](./examples/03-api-definition-by-directory/api)
* [04-api-definition-by-pure-directory](./examples/04-api-definition-by-pure-directory/api)
* [05-api-definition-[minimally]](./examples/05-api-definition-[minimally]/api/define.js)
* [06-api-definition-[completely]](./examples/06-api-definition-[completely]/api/define.js)



**1. The complete api definitions**

```js
{
    // .............................................
    //
    // Api Info
    //
    // .............................................

    // If omitted, parse from "url"
    api: '/bill/form/crud',

    // If omitted, parse from "api" (such as "Bill - Form - Crud").
    title: 'The title of this api',

    // The demo url for this api
    url: 'http://localhost:3000/bill/form/crud?formname=trader',

    // .............................................
    //
    // Test Info
    //
    // .............................................

    // Input (send it to server). If omitted, parse from url.
    params: {
        formname: 'trader',
    },

    // Output (get it from server). It can be omitted if not required for testing.
    result: {
        "success": true,
        "data": {
            "formname": "trader"
        }
    },

    // The test case
    //     For clarity of reading, write it as the sequence below:
    //        {beforeDo, url, getResult, afterDo, verify}
    test: {

        // Call the specific apis before do with test url if needed.
        //     E.g., insert some data to db before do with test url.
        //     The beforeDo can be an array, an api, a title, or a url.
        beforeDo: [
            '/bill/form/crud', // by api
            'Bill - Form - Crud', // by title
            'http://localhost:3000/bill/form/crud?formname=trader', // by url
        ],

        // The test url. If omitted, use the demo url.
        //     E.g., the test url carries more parameters than the demo url for specific purposes.
        url: undefined,

        // Explaining how to get the result. If omitted, use the demo url.
        //     E.g., after deleting the data via test url, re-acquire the data to verify if it is exists.
        //     The usage is the same as beforeDo.
        getResult: undefined,

        // Call the specific apis after get the returned result if needed.
        //     E.g., delete the inserted data in before.
        //     The usage is the same as beforeDo.
        afterDo: undefined,

        // See above section "4. With test ..." for the usage of verify
        verify(result, resultText) {
            return resultText.indexOf(`"formname":"trader"`) >= 0;
        }
    }
}
```



**2. The complete api definitions for multiple test cases of one api**

```js
{
    // .............................................
    //
    // Api Info
    //
    // .............................................

    api: '/bill/form/crud',
    title: 'Bill - Form - Crud',
    url: 'http://localhost:3000/bill/form/crud?formname=trader',

    // .............................................
    //
    // Multiple Sets Of Test Info
    //
    // .............................................

    tests: [
      
        // .............................................
        //
        // Test Info
        //
        // .............................................
        {
            params: {
                ...
            },

            result: {
                ...
            },

            test: {
                ...
            }
        }
    ],
}
```



## Api

| Api | description | Example |
| -- | -- | -- |
| noapi() | Start the api service | [Example](./examples/01-api-definition-by-array/app.js) |
| noapi(options) | Start the api service with custom options | [Example](./examples/19-all-options/app.js) |
| noapi.test() | Start to test the api service| [Example](./examples/50-[for-test]-all-test-types/test/index.js) |
| noapi.test(config) | Start to test the api service with custom configurations| [Example](./examples/09-using-express-middleware/test/index.js) |
| config.js | Start to test the api service with config.js file| [Example](./examples/50-[for-test]-all-test-types/test/config.js) |



## Noapi(options)

| Property | description | Example |
| -- | -- | -- |
| options.serverName | The server name | [Example](./examples/19-all-options/app.js) |
| options.host | The host name | [Example](./examples/19-all-options/app.js) |
| options.port | The port number | [Example](./examples/19-all-options/app.js) |
| options.public | The web public options  | [Example](./examples/19-all-options/app.js) |
| options.assignRules | Transfer some requests to other api services | [Example](./examples/14-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js) |
| options.power | The custom function to handle query | [Example](./examples/16-[for-all-api-services]-preprocess-query-via-power-function/app.js) |



## Noapi.test(config)

| Property | description | Example |
| -- | -- | -- |
| config.onlyTests | Only run test cases with a title of the following value | [Example](./examples/51-[for-test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)|
| config.ignoreTests | Ignore test cases whose title is the following value | [Example](./examples/52-[for-test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)|
| config.catalogs | Categorize the test cases | [Example](./examples/53-[for-test]-[config.catalogs]-categorize-the-test-cases/test/config.js)|
| config.timeout | The timeout of mocha | [Example](./examples/09-using-express-middleware/test/index.js)|
| config.serverReadyTimeout | The timeout (seconds) of mocha for waiting for server ready | |
| config.waitSeconds | The time to wait for the server to be ready before testing | |



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

