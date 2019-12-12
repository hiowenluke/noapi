<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/noapi/master/doc/images/logo.png" alt="Noapi logo" /></p>

# Noapi

An API microservices framework for [Node.js](https://nodejs.org), load biz folder to be an API service. With Noapi, you can easily define api routes, clearly organize business code structures, and focus on writing business function code. 

Noapi has only this feature, no any other features. That is, you don't need to learn Noapi, just take it "out of the box" and start using it immediately.

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

## TRY IT! (in under 3 minutes)

### 0. Init a demo project

```sh
mkdir ./noapi-demo && cd ./noapi-demo
npm init -y
npm install noapi --save
```

Create the core folder "**biz**"

```sh
mkdir biz
```

### 1. Create an api

Create file "./say/hi.js" under the biz folder. It defines an api `/say/hi` and handles it.

```js
module.exports = async (name, age) => {
    return {msg: `Hi, I'm ${name}, ${age} years old.`};
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

See "[examples/01-hello-world](./examples/01-hello-world)" to learn more.

## Examples

See "[examples](./examples)" to learn more.

## Options

```js
const options = {
    name: 'myApi',
    port: 3001,
};

require('noapi')(options);
```

See "[examples/99-options](./examples/99-options)" to learn more.

## Api folder

If there are many tool-type function files under the biz folder, they are not APIs, only used internally. This will prevent us from clearly seeing the api definitions in the biz folder, then you should use the **api folder**.

See "[examples/06-api-folder](./examples/06-api-folder)" to learn about it.

## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke
