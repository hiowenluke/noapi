
const _ = require('lodash');
const spawn = require('child_process').spawn;
const request = require('request');
const qs = require('qs');

const wait = (ms = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
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

	return method;
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

const fn = async (serverInfo, api, testCase) => {
	let {method, params = {}} = testCase;

	method = fixMethod(api, method);
	method = method.toLowerCase();

	const cp = spawn('node', [serverInfo.path]);
	await wait(500);

	const {host = 'localhost', port = 3000} = serverInfo;

	let url, data;

	if (method === 'get') {
		url = `http://${host}:${port}` + api + '?' + qs.stringify(params);
		data = {url};
	}
	else {
		url = `http://${host}:${port}` + api;
		data = {url, form: params};
	}

	return new Promise(resolve => {
		request[method](data, (error, response, body) => {
			process.kill(cp.pid, 'SIGTERM');

			const result = parse(body);
			const isOK = compare(result, testCase);

			resolve(isOK);
		});
	})
};

module.exports = fn;
