
const me = {
	webServiceRoot: '', // root path of web service
	apiServicesRoot: '', // root path of api service(s)
	isSimpleMode: true, // single api service (web service is api service)

	serviceNames: [], // ["api-forms", ...]
	sysNames: [], // ["forms", ...]
	serviceSysNames: {}, // {"api-forms": "forms", "api-erp": "erp"} // for getting sysName by serviceName

	core: {}, // {aha, api, biz}
	assignRules: [], // rules of assigning
};

module.exports = me;
