
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const main = () => {
	const examplesPath = path.resolve(__dirname, '../../examples');
	const testCasesPath = path.resolve(__dirname, './testCases');

	const exampleNames = fs.readdirSync(examplesPath);
	exampleNames.forEach(exampleName => {
		if (exampleName.substr(0, 1) === '.') return;

		const examplePath = examplesPath + '/' + exampleName;
		if (!fs.statSync(examplePath).isDirectory()) return;

		const exampleTestPath = examplePath + '/test';
		fs.mkdirSync(exampleTestPath);
		fs.copyFileSync(testCasesPath + '/' + exampleName + '.js', exampleTestPath + '/cases.js');

		const host = exampleName === '99-options' ? '127.0.0.1' : 'localhost';
		const port = exampleName === '99-options' ? 3001 : 3000;
		const content = `require("testor")({host: '${host}', port: ${port}})`;
		fs.writeFileSync(exampleTestPath + '/index.js', content, 'utf-8');

		cp.spawnSync('node', [exampleTestPath], {stdio: "inherit"});

		fs.unlinkSync(exampleTestPath + '/cases.js');
		fs.unlinkSync(exampleTestPath + '/index.js');
		fs.rmdirSync(exampleTestPath);
	});
};

main();
