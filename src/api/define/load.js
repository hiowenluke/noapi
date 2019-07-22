
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const data = require('../../data');
const model = require('./model');

const fn = () => {
	data.apiDefinePaths.forEach(definePath => {
		const apiDefineArr = require(definePath);
		apiDefineArr.forEach(item => {

			// 'http://localhost:3000/bill/form/crud?formname=trader'
			if (typeof item === 'string') {

			}
		});
	});
};

module.exports = fn;
