
const _ = require('lodash');
const path = require('path');
const spawn = require('child_process').spawn;
const request = require('request');
const expect = require('chai').expect;

const wait = (ms = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};

const getServerPath = (exampleName) => {
	return path.resolve(__dirname, '../../examples/' + exampleName);
};

const fixMethod = (api, method) => {
	if (!method) {
		if (api === '/' || /\.htm[l]$/.test(api)) {
			method = 'get';
		}
		else {
			method = 'post';
		}
	}

	return method.toLowerCase();
};

const compare = (result, testCase) => {
	const verify = testCase.verify;
	const expect = testCase.result;

	const isOK = verify ? verify(result) : _.isEqual(result, expect);

	if (!isOK) {
		console.log('result', JSON.stringify(result, null, 4));

		!verify &&
		console.log('expect', JSON.stringify(expect, null, 4));
	}

	return isOK;
};

const parse = (str) => {
	let result = str;

	if (!/[[{]/.test(result)) {
		return result;
	}

	try {
		result = JSON.parse(str);
	}
	catch(e) {}

	return result;
};

const test = async (serverInfo, api, testCase) => {
	let {method, params} = testCase;
	method = fixMethod(api, method);

	const cp = spawn('node', [serverInfo.path]);
	await wait(500);

	const {host, port} = serverInfo;
	const url = `http://${host}:${port}` + api;
	const postData = {url, form: params};

	return new Promise(resolve => {
		request[method](postData, (error, response, body) => {
			process.kill(cp.pid, 'SIGTERM');

			const result = parse(body);
			const isOK = compare(result, testCase);

			resolve(isOK);
		});
	})
};

const createTests = (exampleName, testCases) => {
	const apis = Object.keys(testCases).filter(key => key.substr(0, 1) === '/');
	const serverInfo = {
		host: testCases.host || 'localhost',
		port: testCases.port || 3000,
		path: getServerPath(exampleName),
	};

	for (let i = 0; i < apis.length; i ++) {
		const api = apis[i];
		const testCase = testCases[api];

		it(api, async () => {
			const result = await test(serverInfo, api, testCase);
			expect(result).to.be.true;
		});
	}
};

module.exports = createTests;
