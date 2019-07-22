
const me = {
	webServiceRoot: '', // root path of web service
	apiServicesRoot: '', // root path of api service(s)
	apiDefinePaths: [], // path of .../api/defines.js in all api services
	isSimpleMode: true, // single api service (web service is api service)

	serviceNames: [], // ["api-forms", ...]
	sysNames: [], // ["forms", ...]
	serviceSysNames: {}, // {"api-forms": "forms", "api-erp": "erp"} // for getting sysName by serviceName

	core: {}, // {aha, api, biz}
	assignRules: [], // rules of assigning

	isSilence: false, // do not print logs if data.isSilence is true
};

module.exports = me;
