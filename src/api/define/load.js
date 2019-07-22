
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const parse = require('./parse');

/** @name define.load */
const fn = () => {
	const definitions = parse();
	if (!definitions) return;
};

module.exports = fn;
