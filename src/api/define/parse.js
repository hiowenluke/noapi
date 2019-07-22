
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
	}
};

/** @name define.parse */
const fn = () => {
	if (data.apiDefineJsPaths.length === 0) return;

	const defs = [];
	data.apiDefineJsPaths.forEach(defineJsPath => {
		const apiDefineArr = require(defineJsPath);
		apiDefineArr.forEach(item => {

			// 'http://localhost:3000/bill/form/crud?formname=trader'
			if (typeof item === 'string') {
				const url = item;
				const {api, title} = parser.getApiTitleFromUrl(url);
				const def = {api, title, url};
				defs.push(def);
			}

			if (_.isPlainObject(item)) {

			}
		});
	});
};

module.exports = fn;
