<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>


# Noapi

Noapi is a light API framework for [Node.js](https://nodejs.org), easily define api and test case, easily I/O. You can focus on the business code, no need to care about how to manage api services, web service, routes, test cases, etc., improve your efficiency, save your time.
![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true)



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

### Define api with array

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)



### Define api with object

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo2.jpg?raw=true)



### Define api with file

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo3.jpg?raw=true)



### Define api with empty file (without test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo4.jpg?raw=true)



### Define api minimally (without test)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo5.jpg?raw=true)



### Define api completely (with full test options)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo6.jpg?raw=true)



### Easy starting

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)



### Easy testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)



### Easy before do and after do in testing

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo9.jpg?raw=true)



### Easy multiple test cases for one api

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo10.jpg?raw=true)



## Examples

### Define api

* [01-define-api-with-array](./examples/01-define-api-with-array)
* [02-define-api-with-object](./examples/02-define-api-with-object)
* [03-define-api-with-file](./examples/03-define-api-with-file)
* [04-define-api-with-empty-file](./examples/04-define-api-with-empty-file)
* [05-define-api-[minimally]](./examples/05-define-api-[minimally])
* [06-define-api-[completely]](./examples/06-define-api-[completely])



### Single api services

* [10-get-url-parameters-via-query](./examples/10-get-url-parameters-via-query)
* [11-get-url-parameters-via-name](./examples/11-get-url-parameters-via-name)
* [12-return-result](./examples/12-return-result)
* [13-use-express-middleware](./examples/13-use-express-middleware)
* [14-custom-express-route](./examples/14-custom-express-route)
* [15-public-folder](./examples/15-public-folder)
* [16-set-public-folder](./examples/16-set-public-folder)
* [17-all-options](./examples/17-all-options)



### Multiple api services

* [20-[multi]-seperate-api-and-web-services](./examples/20-[multi]-seperate-api-and-web-services)
* [21-[multi]-multi-api-services](./examples/21-[multi]-multi-api-services)
* [22-[multi]-call-the-api-which-is-in-other-api-services](./examples/22-[multi]-call-the-api-which-is-in-other-api-services)
* [23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules)
* [24-[multi]-[for-current-api-service]-preprocess-query-via-aha-directory](./examples/24-[multi]-[for-current-api-service]-preprocess-query-via-aha-directory)
* [25-[multi]-[for-all-api-services]-preprocess-query-via-power-function](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function)
* [26-[multi]-[for-all-api-services]-use-assign-rules-and-power-function-advancedly](./examples/26-[multi]-[for-all-api-services]-use-assign-rules-and-power-function-advancedly)
* [27-[multi]-use-noapi.do-instead-of-global.api.do-to-improve-performance](./examples/27-[multi]-use-noapi.do-instead-of-global.api.do-to-improve-performance)
* [28-[multi]-public-folder](./examples/28-[multi]-public-folder)
* [50-[test]-all-kinds-of-test](./examples/50-[test]-all-kinds-of-test)



### For test

* [51-[test]-[config.onlyTests]-run-only-the-specified-test-cases](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases)
* [52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases)
* [53-[test]-[config.catalogs]-categorize-the-test-cases](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases)
* [54-[test]-test.beforeDo-and-test.afterDo](./examples/54-[test]-test.beforeDo-and-test.afterDo)
* [55-[test]-test.getResult](./examples/55-[test]-test.getResult)
* [56-[test]-test.verify](./examples/56-[test]-test.verify)
* [57-[test]-multiple-test-cases-for-one-api](./examples/57-[test]-multiple-test-cases-for-one-api)



See [examples](./examples) to learn more.



## Convert The Definition Mode

As shown above, we can define the apis in three modes, array, object and file. And, we can convert it between these three modes any time via "[noapi-definejs-converter](https://github.com/hiowenluke/noapi-definejs-converter)".




## Api

| Api | description | Example |
| -- | -- | -- |
| noapi(options) | Start the api service | [Example](./examples/16-all-options/app.js) |
| noapi.test(config) | Start to test the api service | [Example](./examples/12-use-express-middleware/test/index.js) |



## Noapi(options)

| Property | description | Example |
| -- | -- | -- |
| options.serverName | The server name | [Example](./examples/16-all-options/app.js) |
| options.host | The host name | [Example](./examples/16-all-options/app.js) |
| options.port | The port number | [Example](./examples/16-all-options/app.js) |
| options.public | The web public options  | [Example](./examples/16-all-options/app.js) |
| options.assignRules | Transfer some requests to other api services | [Example](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js) |
| options.power | The custom function to handle query | [Example](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/app.js) |



## Noapi.test(config)

| Property | description | Example |
| -- | -- | -- |
| config.onlyTests | Only run test cases with a title of the following value | [Example](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)|
| config.ignoreTests | Ignore test cases whose title is the following value | [Example](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)|
| config.catalogs | Categorize the test cases | [Example](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases/test/config.js)|
| config.timeout | The timeout of mocha | [Example](./examples/12-use-express-middleware/test/index.js)|
| config.serverReadyTimeout | The timeout (seconds) of mocha for waiting for server ready | |
| config.waitSeconds | The time to wait for the server to be ready before testing | |



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke

