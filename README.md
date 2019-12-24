
# Noapi

A high-performance and easy-to-use web API framework for [Node.js](https://nodejs.org). Noapi loads directory "biz" as a web API server, each file in it defines and handles an API, so that you can focus on writing business function code. Noapi is simple enough that you just take it "out of the box".

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

Create the core directory "**biz**"

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

Visit the url [http://localhost:3000/say/hi?age=100&name=owen]() to see the result:

```json
{
    "success": true,
    "data": {
        "msg": "Hi, I am owen, 100 years old."
    }
}
```

The order of the parameters in the url can be arbitrary.

## Examples

* [01-hello-world](./examples/01-hello-world)
* [02-complex-url-params](./examples/02-complex-url-params)
* [03-return-error](./examples/03-return-error)
* [04-api-directory](./examples/04-api-directory)
* [99-options](./examples/99-options)

## Options

It can be omitted if it is the default value as below. 

```js
const name = 'default';
const dir = './biz';
const host = 'localhost';
const port = 3000; 
const isSilence = false;

// The number and order of parameters can be arbitrary
noapi(name, dir, host, port, isSilence);
```

See "[examples/99-options](./examples/99-options)" to learn about it.

## Biz directory

Each file in the biz directory defines and handles an API. All files in the biz directory make up the API list.

```js
/root
    /biz
        /say
            hi.js       // /say/hi
        about.js        // /about
     
    index.js    
```

If there are some none-api files (only be used internally) in the biz directory, this will make the API list unclear. Then you should use the **api directory**, just create an empty file (or with the description of this api) to define an api. See "[examples/04-api-directory](./examples/04-api-directory)".

```js
/root
    /api
        /say
            hi.js       // api: /say/hi
        about.js        // api: /about

    /biz
        /__lib
        /say
            /__lib
            hi.js   
            tools.js    // none-api
            check.js    // none-api
        about.js       
        init.js         // none-api
        
    index.js    
```

## Performance

Noapi is a high-performance web API framework, faster than [Koa](https://github.com/koajs/koa), [Express](https://github.com/expressjs/express). See [API Framework Performance PK](https://github.com/hiowenluke/api-frameworks-performance-pk)

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
