
const v = require('voca');
const data = require('../data');

/** @name lib.urlParser */
const me = {
	getApiFromUrl(url) {

		// http://localhost:3000/bill/form/crud?formname=trader => /bill/form/crud?formname=trader
		url = url.replace(/(\w+):\/\/([^/:]+)(:\d*)?/, '');

		// /bill/form/crud?formname=trader => /bill/form/crud
		return url.split('?')[0];
	},

	getTitleFromApi(api) {
		// /bill/form/crud => 'bill - form - crud'
		let str = api.replace(/^\//, '').replace(/\//g, ' - ');

		// 'bill - form - crud' => 'Bill - Form - Crud'
		return v.titleCase(str);
	},

	getApiTitleFromUrl(url) {
		const api = this.getApiFromUrl(url);
		const title = this.getTitleFromApi(api);
		return {api, title};
	},

	getTitleFromUrl(url) {
		const api = this.getApiFromUrl(url);
		const title = this.getTitleFromApi(api);
		const params = url.indexOf('?') >= 0 ? url.split('?')[1].replace(/&/g, ', ') : '';
		return params ? title + ' // ' + params : title;
	},

	getUrlFromApi(api) {
		const {http, port} = data.serverOptions;
		const portStr = port ? ':' + port : '';
		return `http://${http}${portStr}${api}`;
	},

	getApiTitleUrlFromString(str) {
		let api, title, url;

		if (str.substr(0, 1) === '/') { // /bill/form/crud
			api = str;
			title = this.getTitleFromApi(api);
			url = this.getUrlFromApi(api);
		}
		else {
			// http://localhost:3000/bill/form/crud?formname=trader
			url = str;
			({api, title} = this.getApiTitleFromUrl(url));
		}

		return {api, title, url};
	}
};

module.exports = me;
