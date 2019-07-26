
const config = require('../config');
const data = require('../../data');
const createDescribe = require('./createDescribe');

const fn = () => {
	const serviceNames = data.serviceNames;

	serviceNames.forEach(serviceName => {
		const title = serviceName === 'default' ? 'api' : serviceName;
		const sysName = data.serviceSysNames[serviceName];

		//
		if (config.enableCatalogs) {

		}
		else {
			createDescribe(title, sysName);
		}
	});
};

module.exports = fn;
