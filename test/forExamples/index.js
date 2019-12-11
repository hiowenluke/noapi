
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const request = require('request');

const data = require('./data');

const wait = (ms = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};

const toParamsStr = (obj) => {
	const arr = [];

	Object.keys(obj).forEach(key => {
		let val = obj[key];
		if (typeof val === 'object' || Array.isArray(val)) {
			val = JSON.stringify(val);
		}
		arr.push(key + '=' + val);
	});

	return arr.join('&');
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

const fn = async (num, api, params) => {
	const serverPath = serverPaths.getByNumber(num);
	const cp = spawn('node', [serverPath]);
	await wait();

	const paramsStr = toParamsStr(params);
	const url = 'http://localhost:3000' + api + '?' + paramsStr;

	return new Promise(resolve => {
		request(url, (error, response, body) => {
			process.kill(cp.pid, 'SIGTERM');

			const result = JSON.parse(body);
			const expect = data[api];
			const isOK = _.isEqual(result, expect);

			if (!isOK) {
				console.log('result', JSON.stringify(result, null, 4));
				console.log('expect', JSON.stringify(expect, null, 4));
			}

			resolve(isOK);
		});
	})
};

module.exports = fn;
