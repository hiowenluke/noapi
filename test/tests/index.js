
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const main = () => {
	const testorPath = path.resolve(__dirname, '../../node_modules/testor/bin/testor');
	const examplesPath = __dirname;
	const exampleNames = fs.readdirSync(examplesPath);

	exampleNames.forEach(exampleName => {
		if (exampleName.substr(0, 1) === '.') return;

		const examplePath = examplesPath + '/' + exampleName;
		if (!fs.statSync(examplePath).isDirectory()) return;

		cp.spawnSync('node', [testorPath, examplePath], {stdio: "inherit"});
	});
};

main();
