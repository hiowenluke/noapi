
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const main = () => {
	const testorPath = path.resolve(__dirname, '../../node_modules/testor/bin/testor');
	const examplesPath = path.resolve(__dirname, '../../examples');
	const testCasesPath = path.resolve(__dirname, './testCases');

	const exampleNames = fs.readdirSync(examplesPath);
	exampleNames.forEach(exampleName => {
		if (exampleName.substr(0, 1) === '.') return;

		const examplePath = examplesPath + '/' + exampleName;
		if (!fs.statSync(examplePath).isDirectory()) return;

		const exampleTestPath = examplePath + '/test';
		const targetCasesFile = exampleTestPath + '/cases.js';

		fs.mkdirSync(exampleTestPath);
		fs.copyFileSync(testCasesPath + '/' + exampleName + '.js', targetCasesFile);

		const args = [testorPath, examplePath];
		const userConfigFile = fs.existsSync(examplePath + '/config.js') ? '--config' : '';
		if (userConfigFile) args.push(userConfigFile);

		cp.spawnSync('node', args, {stdio: "inherit"});

		fs.unlinkSync(exampleTestPath + '/cases.js');
		fs.rmdirSync(exampleTestPath);
	});
};

main();
