# Noapi and node.js Tutorial for Beginners

## Installation

Installing noapi is easy with npm. If you're new to node.js and npm, don't worry! It's easy to get started.

Noapi uses [Kdo](https://github.com/hiowenluke/kdo) to make the code clear and easy to read and maintain. It's not required but it is highly recommended that you give it a try.

### Install requirements

Noapi is based on [Express](https://expressjs.com). You can use all the middleware of Express or write your own middleware and custom routes. (All of them will be executed before noapi). Noapi requires Node 7.6+ for async/await.

#### Install node.js and npm (Required)

NOTE: Don't forget to run put [sudo](https://www.sudo.ws/intro.html) at the beginning of a command if you get a permissions error (ex: `sudo apt-get install nodejs npm`).

Debian, Mint, Ubuntu:
```sh
apt-get install nodejs npm
```

Fedora:
```sh
dnf install nodejs npm
```

More info [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Install express.js (Required)

Within your project directory:
```sh
npm init
```

You'll be prompted for a bunch of different parameters here. You can just hit ENTER to skip any parameter and leave it as default. However, <b>make sure you provide `app.js` as the `entry point`!</b>

Now to install express.js just run:
```sh
npm install express --save
```

More info [here](https://expressjs.com/en/starter/installing.html)

### Install noapi with npm

NOTE: You need to have node.js and npm setup from the previous section for these commands to work.

```sh
npm i noapi --save
```

To run the automated testing suite:
```sh
git clone https://github.com/hiowenluke/noapi
cd noapi
npm test
```

If that passes then congratulations! You've installed noapi!

## Download the [template repo](https://github.com/hiowenluke/create-api-app-in-5-min)

```sh
git clone https://github.com/hiowenluke/create-api-app-in-5-min
cd create-api-app-in-5-min
npm install
```

### 2. Check out how it works.

1) Run: `node .`
2) Open `api/define.js`. Let's take a look at each of these endpoints one by one.

```
// We can define the api in three ways, array, object and directory,
// and use package "noapi-definejs-converter" to convert between the three modes.
// See "tools/convertDefineJs.js" to learn more.

const me = [
    {
        url: 'http://localhost:3000/do/say/hi?name=Owen&age=100',
        result: {
            "success": true,
            "data": {
                "msg": "Hi, I'm Owen, 100 years old."
            }
        }
    },
```

Go to http://localhost:3000/do/say/hi?name=Owen&age=100 in your browser and you'll see a nice bit of data with a message. Notice how Noapi can handle parameters like "age".

```
	{
		url: 'http://localhost:3000/do/helloWorld',
		result: {
			"success": true,
			"data": "hello world"
		}
	},
```

Now go to http://localhost:3000/do/helloWorld and you'll see a classic "Hello World" example. Notice how Noapi can return either a just a string or a string within an object. It doesn't matter. Also note how api calls like http://localhost:3000/about correspond directly to the file structure in biz (biz/do/helloWorld.js).

```
	{
		url: 'http://localhost:3000/do/somethingIsWrong',
		result: {
			"success": false,
			"error": "something is wrong"
		}
	},
```

At http://localhost:3000/do/somethingIsWrong we can see an example of an error message. Noapi makes it easy to return either data or an error message when something went wrong.

```
	{
        url: 'http://localhost:3000/about',
        result: {
            "success": true,
            "data": {
                "author": "Owen Luke"
            }
        }
    }
];

module.exports = me;
```

At http://localhost:3000/about we can check out a nice little blob of data providing an author. No api makes it easy to return either just a string or a data object. You could also return a static file by simply passing in the name of the directory.

As you can see from `api/define.js` above, we can define api endpoints in different ways to get our desired output. We can return friendly messages, errors, or big blobs of data. The entire definition of our api is defined in this file, making it very simple to make changes. I'd encourage you to play around with these different definitions and try returning different things.

This is just an example of one way to define our api. You can look at [defining the api with an object](https://github.com/hiowenluke/noapi/tree/master/examples/02-define-API-and-test-cases-with-object) and [defining the api with a file](https://github.com/hiowenluke/noapi/tree/master/examples/03-define-API-and-test-cases-with-file).

3) Run: `npm test` to automatically test in terminal.

### 3. Tinker with things and make it your own!

1) Modify the api/define.js to define your apis. The `define.js` defines the data and site structure of the noapi instance. The `app.js` defines the "active" agent for a noapi instance. It manages the API calls and can listen for and respond to the API calls set out in the define.js. This contains the parameters for the expressjs backends.

2) Once `app.js` and `define.js` are defined you can focus on the good stuff -- the business code for your application! All of that code lives here, in the /biz/ directory. To build out our app we can just create html forms that make GET and POST calls to our api.

Enjoy!

See [examples](https://github.com/hiowenluke/noapi/tree/master/examples) to learn more.
