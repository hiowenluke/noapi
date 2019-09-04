
/** @name lib.isLegalApiServiceName */
const fn = (serviceName) => {
	return serviceName === 'api' || serviceName.substr(0, 4) === 'api-';
};

module.exports = fn;
