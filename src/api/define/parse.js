
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const data = require('../../data');
const model = require('./__model');

/** @name define.parse */
const fn = () => {
	if (data.apiDefineJsPaths.length === 0) return;

	data.apiDefineJsPaths.forEach(defineJsPath => {
		const apiDefineArr = require(defineJsPath);
		apiDefineArr.forEach(item => {

			// 'http://localhost:3000/bill/form/crud?formname=trader'
			if (typeof item === 'string') {

			}
		});
	});
};

module.exports = fn;
