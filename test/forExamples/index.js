
const kdo = require('kdo');
const test = require('./test');

const main = () => {
	const testCases = kdo(__dirname + '/testCases');
	const examplesNames = Object.keys(testCases);

	for (let i = 0; i < examplesNames.length; i++) {
		const name = examplesNames[i];
		const cases = testCases[name];

		describe('Examples / ' + name, () => {
			test(name, cases);
		});
	}
};

main();
