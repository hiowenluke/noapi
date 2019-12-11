<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>

# Noapi

A web microservices framework for [Node.js](https://nodejs.org), load a directory as a web service. With Noapi, we can clearly define api routes, organize business code structures, and focus on writing functional code.

<p align="center"><img width="100%" src="https://github.com/hiowenluke/noapi/blob/master/doc/images/demo.jpg?raw=true" /></p>

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
mkdir ./noapi-demo && cd ./noapi-demo
npm init -y
npm install noapi --save
```

Create the core folder "**biz**"

```sh
mkdir biz
```

### 1. Create business file

Create file "./say/hi.js" under the folder biz. It defines an api `/say/hi` and handles it.

```js
module.exports = async (query) => {
    return {msg: `Hi, I'm ${query.name}, ${query.age} years old.`};
};
```

### 2. Create index.js

```js
require('noapi')();
```

### 3. Run

```sh
node index.js
Server default is listening on port 3000
```

Visit [http://localhost:3000/say/hi?name=owen&age=100]() to see the result:
```
{
    "success": true,
    "data": {
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
