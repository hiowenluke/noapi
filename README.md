
# Noapi

A high-performance and easy-to-use API framework for [Node.js](https://nodejs.org), load a folder as an API service. With Noapi, you can easily define api routes, focus on writing business function code. Noapi accepts GET and POST data. Noapi is simple enough that you just take it "out of the box".

## Install

```sh
npm install noapi --save
```

## TRY IT! (in under 3 minutes)

### 0. Initialize a demo project

```sh
mkdir ./noapi-demo && cd ./noapi-demo
npm init -y
npm install noapi --save
```

Create the core folder "**biz**"

```sh
mkdir biz
```

### 1. Create a biz file

Create file "./biz/say/hi.js". It defines an api "/say/hi" and handles it. 

```js
module.exports = async (name, age) => {
    return {msg: `Hi, I am ${name}, ${age} years old.`};
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

Visit [http://localhost:3000/say/hi?age=100&name=owen]() to see the result:
```json
{
    "success": true,
    "data": {
        "msg": "Hi, I am owen, 100 years old."
    }
}
```

## Examples

* [01-hello-world](./examples/01-hello-world)
* [02-complex-url-params](./examples/02-complex-url-params)
* [03-return-error](./examples/03-return-error)
* [04-api-folder](./examples/04-api-folder)
* [99-options](./examples/99-options)

## Options

```js
const noapi = require('noapi');

const name = 'myApi'; // default is "default"
const host = '127.0.0.1'; // default is "localhost"
const port = 3001; // default is 3000
const isSilence = true; // default is false

// The number and order of parameters can be arbitrary
noapi(name, host, port, isSilence);

// Equiv to:
//     const options = {
//         name: 'myApi',
//         host: '127.0.0.1',
//         port: 3001,
//         isSilence: true,
//     };
//
//     noapi(options);
```

See "[examples/99-options](./examples/99-options)" to learn about it.

## Api folder

Each file in the biz folder corresponds to an API. If there are some tool-type function files under the biz folder (not APIs, which can only be used internally), this will make the APIs list unclear, then you should use a separate **api folder**.

See "[examples/04-api-folder](./examples/04-api-folder)" to learn about it.

## Performance

Noapi is a high-performance API framework, faster than [Koa](https://github.com/koajs/koa), [Express](https://github.com/expressjs/express). See [API Framework Performance PK](https://github.com/hiowenluke/api-frameworks-performance-pk)

## Test

```sh
git clone https://github.com/hiowenluke/noapi
cd noapi
npm install
npm test
```

## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
