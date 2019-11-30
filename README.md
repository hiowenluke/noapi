<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>

# Noapi

A light API framework for [Node.js](https://nodejs.org). Easily define APIs and test cases, manage inputs and outputs, and automatically test them. Noapi takes care of the underlying web services, api services, routing, and testing to help you focus on <b>writing functional code</b>, <b>improving your efficiency</b>, and <b>saving you time</b>.
<p align="center"><img width="100%" src="https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true" /></p>

Noapi uses [Kdo](https://github.com/hiowenluke/kdo) to make the code clear and easy to read and maintain. It's not required but it is highly recommended that you give it a try.

## Installation

See below section "Quick Start" to learn more.
```sh
npm install noapi --save
```

Test:
```sh
git clone https://github.com/hiowenluke/noapi
cd noapi
npm install
npm test
```

## Quick Start

### 1. Init project

Run the following commands in your terminal:
```sh
npm init -y
npm install noapi --save
```

### 2. Create index.js

```js
// Create a web server
require('noapi')();
```

### 3. Run

Run the following command in your terminal:
```sh
node index.js
```

Noapi automatically copies **api**, **biz** and **test** folders from template if the current project is empty (only index.js), runs it as a demo project. Plese visit <http://localhost:3000/do/say/hi?name=Owen&age=100> in your browser, the server should returns below result:

```js
{
    // The state of result
    "success": true,
    
    // The data of result
    "data": {
        "msg": "Hi, I'm Owen, 100 years old.",
        "name": "Owen",
        "age": 100
    }
}
```

### 4. Read

Press Ctrl + C to quit the project above in your terminal, then:

1) Open **./api/define.js**, you can see the api **/do/say/hi** is defined in it.
2) Open **./biz/do/say/hi.js**, this biz file is the handler of api **/do/say/hi**.
3) Read the **biz** files  (js file under **biz** folder), learn how Noapi works.

### 5. Test

1\) Modify **index.js** as below:
```js
// Create a web server
const server = require('noapi')();

// Export the web server for supertest which used by Noapi's automated tests.
module.exports = server;
```

2\) Modify **package.json**, change "**test**" as below:
```json
"test": "cd test && mocha . --exit"
```

3\) Install the dependencies for testing:
```sh
npm install chai mocha supertest --save-dev
```

4\) Run tests:
```sh
npm test
```

### 6. Startup your great project

Tinker with things and make it your own:  

1\) Modify the **./api/define.js** to define your APIs (and test cases).  
2\) Create the **biz** files to corresponds to your APIs.  
3\) Write your business code in the **biz** files.  

Enjoy!

See [examples](#examples) to learn more.

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

1\) Test: `npm test`  
2\) Read **./api/define.js** and files in **./biz** to learn details.  
3\) Run `node .` first, then copy url from **define.js** and past to your browser to experience.  

#### Define API and test cases

* [01 Define API and test cases with array](./examples/01-define-API-and-test-cases-with-array/api/define.js)
* [02 Define API and test cases with object](./examples/02-define-API-and-test-cases-with-object/api/define.js)
* [03 Define API and test cases with file](./examples/03-define-API-and-test-cases-with-file/api)
* [04 Define API and test cases [completely]](./examples/04-define-API-and-test-cases-[completely]/api/define.js)
* [05 Define API [minimally]](./examples/05-define-API-[minimally]/api/define.js)
* [06 Define API with empty file](./examples/06-define-API-with-empty-file/api)

#### Use API services

* [10 get url parameters via query](./examples/10-get-url-parameters-via-query/biz/bill/form/crud.js)
* [11 get url parameters via name](./examples/11-get-url-parameters-via-name/biz/bill/form/crud.js)
* [12 return error](./examples/12-return-error/biz/bill/form/crud.js)
* [13 use express middleware](./examples/13-use-express-middleware/app.js)
* [14 custom express route](./examples/14-custom-express-route/app.js)
* [15 default public folder](./examples/15-default-public-folder/app.js)
* [16 set public folder](./examples/16-set-public-folder/app.js)
* [17 post data](./examples/17-post-data/api/define.js)
* [18 all options](./examples/18-all-options/app.js)

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
| noapi(options) | Start the API service | [Example](./examples/18-all-options/app.js) |
| noapi.test(config) | Start to test the API service | [Example](./examples/13-use-express-middleware/test/index.js) |

## Noapi Options

| Property | description | Example |
| -- | -- | -- |
| options.serverName | The server name | [Example](./examples/18-all-options/app.js) |
| options.host | The host name | [Example](./examples/18-all-options/app.js) |
| options.port | The port number | [Example](./examples/18-all-options/app.js) |
| options.public | The web public options  | [Example](./examples/18-all-options/app.js) |
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
