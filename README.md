<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>
# Noapi

A light API framework for [Node.js](https://nodejs.org). Easily define APIs, manage inputs and outputs. Noapi takes care of the underlying web services, api services and routings to help you focus on <b>writing functional code</b>, <b>improving your efficiency</b>, and <b>saving you time</b>.
<p align="center"><img width="100%" src="https://github.com/hiowenluke/noapi/blob/master/doc/images/demo0.jpg?raw=true" /></p>
Noapi uses [Kdo](https://github.com/hiowenluke/kdo) to make the code clear and easy to read and maintain. It's not required but it is highly recommended that you give it a try.

## Install

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

### 0. Prepare

```sh
mkdir -p ./path/to/noapi-demo
cd ./path/to/noapi-demo
npm init -y
npm install noapi --save
```

### 1. Define apis

1\) Create **API** folder: `mkdir api`.
2\) Create an empty file **./api/say/hi.js** to define an api: `/say/hi`.

### 2. Write business code

1\) Create **BIZ** folder: `mkdir biz`.
2\) Create a file **./biz/say/hi.js** to handle the api `/say/hi`:

```js
module.exports = async (query) => {
    return {msg: `Hi, I'm ${query.name}, ${query.age} years old.`};
};
```

### 3. Create index.js

```js
require('noapi')();
```

### 4. Run it

```sh
node index.js
Server default is listening on port 3000
```

### 5. Test it

Open your favorite browser, visit the url `http://localhost:3000/say/hi?name=owen&age=100`, the result will be like below:
```
{
    "success": true, // The state of the result
    "data": {        // The data of the result
        "msg": "Hi, I'm owen, 100 years old."
    }
}
```

## Usage



## Examples

See [examples](#examples) to learn more.

## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
