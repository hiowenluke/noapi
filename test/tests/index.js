
const createDescribes = require('../__tester/createDescribes');

const main = () => {
	const title = 'Tests';
	const serversRootPath = './servers';
	createDescribes(title, serversRootPath);
};

main();
