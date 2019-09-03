
const data = require('../../data');

const fn = (thisApi) => {
	const serviceName = data.testOptions.serviceName;
	const sysName = data.serviceSysNames[serviceName];
	const defineJs = data.defineJs[sysName];
	const {api, tests} = defineJs;

	for (let i = 0; i < api.length; i ++) {
		const apiInfo = api[i];
		if (apiInfo.api === thisApi) {
			const testInfos = tests[i];
			const ioInfo = testInfos[0].io;
			const testInfo = testInfos[0].test;
			return {apiInfo, ioInfo, testInfo};
		}
	}
};

module.exports = fn;
