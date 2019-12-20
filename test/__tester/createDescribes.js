
const kdo = require('kdo');
const caller = require('caller');
const path = require('path');

const spawn = require('child_process').spawn;
const createTests = require('./createTests');

const wait = (ms = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};

const fn = (describeTitle, serversRootPath) => {
	const pathToCaller = caller();
	const sourceFolder = path.resolve(pathToCaller, '..');
	const testCases = kdo(sourceFolder + '/testCases');

	const serverNames = Object.keys(testCases);

	for (let i = 0; i < serverNames.length; i++) {
		const serverName = serverNames[i];
		const cases = testCases[serverName];

		const title = describeTitle + ' / ' + serverName;
		const serverPath = path.resolve(sourceFolder, serversRootPath + '/' + serverName);

		describe(title, () => {
			let cp;

			before(async () => {
				cp = spawn('node', [serverPath]);
				await wait();
			});

			after(async () => {
				process.kill(cp.pid, 'SIGTERM');
			});

			createTests(serverPath, cases);
		});
	}
};

module.exports = fn;
