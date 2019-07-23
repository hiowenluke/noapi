
const _ = require('lodash');
const v = require('voca');

const fs = require('fs');
const path = require('path');

const data = require('../../data');
const model = require('./__model');

const parser = {
	getApiFromUrl(url) {

		// http://localhost:3000/bill/form/crud?formname=trader => /bill/form/crud?formname=trader
		url = url.replace(/(\w+):\/\/([^/:]+)(:\d*)?/, '');

		// /bill/form/crud?formname=trader => /bill/form/crud
		return url.split('?')[0];
	},

	getTitleFromApi(api) {
		// /bill/form/crud => 'bill - form - crud'
		let str = api.replace(/^\//, '').replace('/', ' - ');

		// 'bill - form - crud' => 'Bill - Form - Crud'
		return v.titleCase(str);
	},

	getApiTitleFromUrl(url) {
		const api = this.getApiFromUrl(url);
		const title = this.getTitleFromApi(api);
		return {api, title};
	},

	getUrlFromApi(api) {
		const {http, port} = data.serverOptions;
		const portStr = port ? ':' + port : '';
		const url = `http://${http}${portStr}${api}`;
		return url;
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

/** @name define.parse */
const me = {
	forApiInfos() {
		if (data.apiDefineJsPaths.length === 0) return;

		const apiInfos = [];
		data.apiDefineJsPaths.forEach(defineJsPath => {
			const apiDefineArr = require(defineJsPath);

			apiDefineArr.forEach(item => {

				// api: /bill/form/crud
				// url: http://localhost:3000/bill/form/crud?formname=trader
				if (typeof item === 'string') {
					const {api, title, url} = parser.getApiTitleUrlFromString(item);
					apiInfos.push({api, title, url});
				}

				// {api, title, url}
				if (_.isPlainObject(item)) {
					let {api, title, url} = item;

					// There must be at least one api and url.
					if (!api && !url) return;

					if (!api) { // There is a url
						api = parser.getApiFromUrl(url);
					}
					else { // There is a api
						url = parser.getUrlFromApi(api);
					}

					title = parser.getTitleFromApi(api);
					apiInfos.push({api, title, url});
				}
			});
		});

		return apiInfos;
	},

	forAll() {

	}
};

module.exports = me;
