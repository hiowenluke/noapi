
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const request = require('request');
const tryParseJsonStr = require('../../src/__lib/tryParseJsonStr');

const data = require('./data');

const wait = (ms = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};

const serverPaths = ({
	data: {},

	init() {
		const root = path.resolve(__dirname, '../../examples');
		const folderNames = fs.readdirSync(root);

		let i = 0;

		folderNames.forEach(folderName => {
			const serverPath = root + '/' + folderName;
			if (!fs.statSync(serverPath).isDirectory()) return;

			this.data[++i] = serverPath;
		});

		return this;
	},

	getByNumber(number) {
		return this.data[number];
	}

}).init();

const fn = async (num, api, params, {method = 'post'} = {}) => {
	const serverPath = serverPaths.getByNumber(num);
	const cp = spawn('node', [serverPath]);
	await wait(500);

	const url = 'http://localhost:3000' + api;
	const postData = {url, form: params};

	return new Promise(resolve => {
		request[method](postData, (error, response, body) => {
			process.kill(cp.pid, 'SIGTERM');

			const result = tryParseJsonStr.do(body) || body;
			const expect = data[api];

			const isExpectFunction = typeof expect === 'function';
			const isOK = isExpectFunction ?
				expect(result) :
				_.isEqual(result, expect)
			;

			if (!isOK) {
				console.log('result', JSON.stringify(result, null, 4));

				!isExpectFunction &&
				console.log('expect', JSON.stringify(expect, null, 4));
			}

			resolve(isOK);
		});
	})
};

module.exports = fn;
