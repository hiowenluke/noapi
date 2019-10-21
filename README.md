<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>

# Noapi

Noapi is a light API framework for [Node.js](https://nodejs.org). It can be used to easily define APIs, manage inputs and outputs, and create test cases. Noapi takes care of the underlying web services, api services, routing, and testing to help you focus on <b>writing functional code</b>, <b>improving your efficiency</b>, and <b>saving you time</b>.
<p align="center"><img width="100%" src="https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true" /></p>

Noapi uses [Kdo](https://github.com/hiowenluke/kdo) to make the code clear and easy to read and maintain. It's not required but it is highly recommended that you give it a try.

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

#### 1. Download the [template repo](https://github.com/hiowenluke/create-api-app-in-5-min)

```sh
git clone https://github.com/hiowenluke/create-api-app-in-5-min
cd create-api-app-in-5-min
npm install
```

#### 2. Check out how it works.

1) Run: `node .`
2) Open api/define.js, then copy and paste each url to your browser to view the result.
3) Run: `npm test` to automatically test in terminal.

#### 3. Tinker with things and make it your own!

1) Modify the api/define.js to define your apis.
2) Write your business code in the biz folder to start up your great project.

Enjoy!

See [Tutorials](#tutorials) and [examples](#examples) to learn more.

## Demos

#### [Define API and test cases with array](./examples/01-define-API-and-test-cases-with-array/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo1.jpg?raw=true)

#### [Define API and test cases with object](./examples/02-define-API-and-test-cases-with-object/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo2.jpg?raw=true)

#### [Define API and test cases with file](./examples/03-define-API-and-test-cases-with-file/api/bill/form/crud.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo3.jpg?raw=true)

#### [Define API and test cases completely (with full test options)](./examples/04-define-API-and-test-cases-[completely]/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo6.jpg?raw=true)

#### [Define API minimally (without test cases)](./examples/05-define-API-[minimally]/api/define.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo5.jpg?raw=true)

#### [Define API with empty file (without test cases)](./examples/06-define-API-with-empty-file/api/bill/form/crud.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo4.jpg?raw=true)

#### [Easy starting](./examples/01-define-API-and-test-cases-with-array/app.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo7.jpg?raw=true)

#### [Easy testing](./examples/01-define-API-and-test-cases-with-array/test/index.js)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo8.jpg?raw=true)

#### [Easy before do and after do in testing](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/04-define-API-and-test-cases-%5Bcompletely%5D/api/define.js#L238)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo9.jpg?raw=true)

#### [Easy multiple test cases for one api](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/04-define-API-and-test-cases-%5Bcompletely%5D/api/define.js#L273)

![](https://github.com/hiowenluke/noapi/blob/master/doc/images/demo10.jpg?raw=true)

## Tutorials

#### For Beginners of node.js

* [Starting with template project (**recommend**)](https://github.com/CollinEMac/noapi/wiki/Noapi-and-node.js-Tutorial-for-Beginners)
* Starting with a blank project (waiting for you to add)

## Examples

**1. Run all examples**

```sh
cd /path/to/noapi/examples
sh ./test.sh
```

**2. Run a single example**

Take **example #1** as an example:
```sh
cd /path/to/noapi/examples/01-define-API-and-test-cases-with-array
```

1) Test: `npm test`
2) Read **./api/define.js** and files in **./biz** to learn details.
3) Run `node .` first, then copy url from **define.js** and past to your browser to experience.

#### Define API and test cases

* [01 Define API and test cases with array](./examples/01-define-API-and-test-cases-with-array/api/define.js)
* [02 Define API and test cases with object](./examples/02-define-API-and-test-cases-with-object/api/define.js)
* [03 Define API and test cases with file](./examples/03-define-API-and-test-cases-with-file/api)
* [04 Define API and test cases [completely]](./examples/04-define-API-and-test-cases-[completely]/api/define.js)
* [05 Define API [minimally]](./examples/05-define-API-[minimally]/api/define.js)
* [06 Define API with empty file](./examples/06-define-API-with-empty-file/api)

#### Single API services

* [10 get url parameters via query](./examples/10-get-url-parameters-via-query/biz/bill/form/crud.js)
* [11 get url parameters via name](./examples/11-get-url-parameters-via-name/biz/bill/form/crud.js)
* [12 return result](./examples/12-return-result/biz/bill/form/crud.js)
* [13 use express middleware](./examples/13-use-express-middleware/app.js)
* [14 custom express route](./examples/14-custom-express-route/app.js)
* [15 public folder](./examples/15-public-folder/app.js)
* [16 set public folder](./examples/16-set-public-folder/app.js)
* [17 all options](./examples/17-all-options/app.js)

#### Multiple API services

* [20 [multi] seperate api and web services](./examples/20-[multi]-seperate-api-and-web-services) [**[readme]**](./examples/20-[multi]-seperate-api-and-web-services/readme.md)
* [21 [multi] multi api services](./examples/21-[multi]-multi-api-services) [**[readme]**](./examples/21-[multi]-multi-api-services/readme.md)
* [22 [multi] call the api which is in other api services](./examples/22-[multi]-call-the-api-which-is-in-other-api-services/api-erp/biz/report/purchase/order.js) [**[readme]**](./examples/22-[multi]-call-the-api-which-is-in-other-api-services/readme.md)
* [23 [multi] call the api which is in other api services via assign rules](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js) [**[readme]**](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/readme.md)
* [24 [multi] [for current api service] preprocess query via aha directory](./examples/24-[multi]-[for-current-api-service]-preprocess-query-via-aha-directory/aha) [**[readme]**](./examples/24-[multi]-[for-current-api-service]-preprocess-query-via-aha-directory/readme.md)
* [25 [multi] [for all api services] preprocess query via power function](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/app.js) [**[readme]**](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/readme.md)
* [26 [multi] [for all api services] use advanced assign rules and power function](./examples/26-[multi]-[for-all-api-services]-use-advanced-assign-rules-and-power-function/web/noapi/index.js) [**[readme]**](./examples/26-[multi]-[for-all-api-services]-use-advanced-assign-rules-and-power-function/readme.md)
* [27 [multi] use noapi.do instead of global.api.do to improve performance](./examples/27-[multi]-use-noapi.do-instead-of-global.api.do-to-improve-performance/api-erp/biz/report/purchase/order.js)
* [28 [multi] public folder](./examples/28-[multi]-public-folder/web/app.js)

#### For testing

* [50 [test] all kinds of test](./examples/50-[test]-all-kinds-of-test/api/define.js)
* [51 [test] [config.onlyTests] run only the specified test cases](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)
* [52 [test] [config.ignoreTests] ignore the specified test cases](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)
* [53 [test] [config.catalogs] categorize the test cases](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases/test/config.js)
* [54 [test] test.beforeDo and test.afterDo](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/54-%5Btest%5D-test.beforeDo-and-test.afterDo/api/define.js#L46)
* [55 [test] test.getResult](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/55-%5Btest%5D-test.getResult/api/define.js#L85)
* [56 [test] test.verify](https://github.com/hiowenluke/noapi/blob/27b2a37f5bd59d2267feac7fc7935b9d2a977733/examples/56-%5Btest%5D-test.verify/api/define.js#L46)
* [57 [test] multiple test cases for one api](./examples/57-[test]-multiple-test-cases-for-one-api/api/define.js)

## Changing Definition Mode

As shown above, we can define API in three modes: <b>array</b>, <b>object</b> and <b>file</b>. We can convert it between these three modes any time via "[noapi-definejs-converter](https://github.com/hiowenluke/noapi-definejs-converter)".

## API

| API | description | Example |
| -- | -- | -- |
| noapi(options) | Start the API service | [Example](./examples/17-all-options/app.js) |
| noapi.test(config) | Start to test the API service | [Example](./examples/13-use-express-middleware/test/index.js) |

## Noapi Options

| Property | description | Example |
| -- | -- | -- |
| options.serverName | The server name | [Example](./examples/17-all-options/app.js) |
| options.host | The host name | [Example](./examples/17-all-options/app.js) |
| options.port | The port number | [Example](./examples/17-all-options/app.js) |
| options.public | The web public options  | [Example](./examples/17-all-options/app.js) |
| options.assignRules | Transfer some requests to other API services | [Example](./examples/23-[multi]-call-the-api-which-is-in-other-api-services-via-assign-rules/web/app.js) |
| options.power | The custom function to handle query | [Example](./examples/25-[multi]-[for-all-api-services]-preprocess-query-via-power-function/app.js) |

## Noapi.test Config

| Property | description | Example |
| -- | -- | -- |
| config.onlyTests | Only run test cases with a title of the following value | [Example](./examples/51-[test]-[config.onlyTests]-run-only-the-specified-test-cases/test/config.js)|
| config.ignoreTests | Ignore test cases whose title is the following value | [Example](./examples/52-[test]-[config.ignoreTests]-ignore-the-specified-test-cases/test/config.js)|
| config.catalogs | Categorize the test cases | [Example](./examples/53-[test]-[config.catalogs]-categorize-the-test-cases/test/config.js)|
| config.timeout | The timeout of mocha | [Example](./examples/13-use-express-middleware/test/index.js)|
| config.serverReadyTimeout | The timeout (seconds) of mocha for waiting for server ready | |
| config.waitSeconds | The time to wait for the server to be ready before testing | |

## License

Noapi is a free and open source platform.

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
