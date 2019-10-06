<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>


# Noapi

Noapi is a light API framework for [Node.js](https://nodejs.org), easily define apis and test cases, easily I/O. You can focus on the business code, no need to care about how to manage web service, api services, routes, test cases, etc., improve your efficiency, save your time.
<p align="center"><img width="100%" src="https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true" /></p>



Noapi is based on [Express](https://expressjs.com), you can use all the middleware of Express or write your own middleware and custom routes. (All of them will be executed before noapi). Noapi requires Node 7.6+ for async/await.



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



## Quick Start (in Under 5 Minutes)

### 1. Download the [template repo](https://github.com/hiowenluke/create-api-app-in-5-min)

```sh
git clone https://github.com/hiowenluke/create-api-app-in-5-min
cd create-api-app-in-5-min
npm install
```



### 2. Experience

1) Run: `node .`
2) Open api/define.js, copy and past the urls to your browser to view the result.
3) Automatically test in your terminal: `npm test`



### 3. DIY

1) Modify the api/define.js to define your apis.
2) Write your business code in biz folder to start up your great project. 

Enjoy!



See [examples](https://github.com/hiowenluke/noapi/tree/master/examples) to learn more.



## Demo

### [Define apis and test cases with array](./examples/01-define-apis-and-test-cases-with-array/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)



### [Define apis and test cases with object](./examples/02-define-apis-and-test-cases-with-object/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo2.jpg?raw=true)



### [Define apis and test cases with file](./examples/03-define-apis-and-test-cases-with-file/api/bill/form/crud.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo3.jpg?raw=true)



### [Define apis and test cases completely (with full test options)](./examples/04-define-apis-and-test-cases-[completely]/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo6.jpg?raw=true)



### [Define apis minimally (without test)](./examples/05-define-apis-[minimally]/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo5.jpg?raw=true)



### [Define apis with empty file (without test)](./examples/06-define-apis-with-empty-file/api/bill/form/crud.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo4.jpg?raw=true)



### [Easy starting](./examples/01-define-apis-and-test-cases-with-array/app.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)



### [Easy testing](./examples/01-define-apis-and-test-cases-with-array/test/index.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)



### [Easy before do and after do in testing](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/04-define-apis-and-test-cases-%5Bcompletely%5D/api/define.js#L238)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo9.jpg?raw=true)



### [Easy multiple test cases for one api](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/04-define-apis-and-test-cases-%5Bcompletely%5D/api/define.js#L273)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo10.jpg?raw=true)



## Examples

### Define apis

* [01 define apis and test cases with array](./examples/01-define-apis-and-test-cases-with-array/api/define.js)
* [02 define apis and test cases with object](./examples/02-define-apis-and-test-cases-with-object/api/define.js)
* [03 define apis and test cases with file](./examples/03-define-apis-and-test-cases-with-file/api)
* [04 define apis and test cases [completely]](./examples/04-define-apis-and-test-cases-[completely]/api/define.js)
* [05 define apis [minimally]](./examples/05-define-apis-[minimally]/api/define.js)
* [06 define apis with empty file](./examples/06-define-apis-with-empty-file/api)



### Single api services

* [10 get url parameters via query](./examples/10-get-url-parameters-via-query/biz/bill/form/crud.js)
* [11 get url parameters via name](./examples/11-get-url-parameters-via-name/biz/bill/form/crud.js)
* [12 return result](./examples/12-return-result/biz/bill/form/crud.js)
* [13 use express middleware](./examples/13-use-express-middleware/app.js)
* [14 custom express route](./examples/14-custom-express-route/app.js)
* [15 public folder](./examples/15-public-folder/app.js)
* [16 set public folder](./examples/16-set-public-folder/app.js)
* [17 all options](./examples/17-all-options/app.js)



### Multiple api services

* [20 [multi] seperate api and web services](./examples/20-[multi]-seperate-api-and-web-services/readme.md)
* [21 [multi] multi api services](./examples/21-[multi]-multi-api-services/readme.md)
* [22 [multi] call the api which is in other api services](./examples/22-[multi]-call-the-api-which-is-in-other-api-services/api-erp/biz/report/purchase/order.js)
* [23 [multi] call the api which is in other api services via assign rules](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js)
* [24 [multi] [for current api service] preprocess query via aha directory](./examples/24-[multi]-[for-current-api-service]-preprocess-query-via-aha-directory/aha)
* [25 [multi] [for all api services] preprocess query via power function](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/app.js)
* [26 [multi] [for all api services] use advanced assign rules and power function](./examples/26-[multi]-[for-all-api-services]-use-advanced-assign-rules-and-power-function/web/noapi/index.js)
* [27 [multi] use noapi.do instead of global.api.do to improve performance](./examples/27-[multi]-use-noapi.do-instead-of-global.api.do-to-improve-performance/api-erp/biz/report/purchase/order.js)
* [28 [multi] public folder](./examples/28-[multi]-public-folder/web/app.js)



### For test

* [50 [test] all kinds of test](./examples/50-[test]-all-kinds-of-test/api/define.js)
* [51 [test] [config.onlyTests] run only the specified test cases](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)
* [52 [test] [config.ignoreTests] ignore the specified test cases](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)
* [53 [test] [config.catalogs] categorize the test cases](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases/test/config.js)
* [54 [test] test.beforeDo and test.afterDo](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/54-%5Btest%5D-test.beforeDo-and-test.afterDo/api/define.js#L46)
* [55 [test] test.getResult](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/55-%5Btest%5D-test.getResult/api/define.js#L85)
* [56 [test] test.verify](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/56-%5Btest%5D-test.verify/api/define.js#L46)
* [57 [test] multiple test cases for one api](./examples/57-[test]-multiple-test-cases-for-one-api/api/define.js)



See [examples](./examples) to learn more.



## Convert The Definition Mode

As shown above, we can define the apis in three modes, array, object and file. And, we can convert it between these three modes any time via "[noapi-definejs-converter](https://github.com/hiowenluke/noapi-definejs-converter)".




## Api

| Api | description | Example |
| -- | -- | -- |
| noapi(options) | Start the api service | [Example](./examples/17-all-options/app.js) |
| noapi.test(config) | Start to test the api service | [Example](./examples/13-use-express-middleware/test/index.js) |



## Noapi(options)

| Property | description | Example |
| -- | -- | -- |
| options.serverName | The server name | [Example](./examples/17-all-options/app.js) |
| options.host | The host name | [Example](./examples/17-all-options/app.js) |
| options.port | The port number | [Example](./examples/17-all-options/app.js) |
| options.public | The web public options  | [Example](./examples/17-all-options/app.js) |
| options.assignRules | Transfer some requests to other api services | [Example](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js) |
| options.power | The custom function to handle query | [Example](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/app.js) |



## Noapi.test(config)

| Property | description | Example |
| -- | -- | -- |
| config.onlyTests | Only run test cases with a title of the following value | [Example](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)|
| config.ignoreTests | Ignore test cases whose title is the following value | [Example](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)|
| config.catalogs | Categorize the test cases | [Example](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases/test/config.js)|
| config.timeout | The timeout of mocha | [Example](./examples/13-use-express-middleware/test/index.js)|
| config.serverReadyTimeout | The timeout (seconds) of mocha for waiting for server ready | |
| config.waitSeconds | The time to wait for the server to be ready before testing | |



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

