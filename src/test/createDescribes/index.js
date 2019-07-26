
const config = require('../config');
const data = require('../../data');
const createDescribe = require('./createDescribe');

const fn = () => {
	const serviceNames = data.serviceNames;

	serviceNames.forEach(serviceName => {
		const title = serviceName === 'default' ? 'api' : serviceName;

		if (config.enableCatalogs) {

		}
		else {
		}

		createDescribe(title, serviceName);
	});
};

module.exports = fn;
