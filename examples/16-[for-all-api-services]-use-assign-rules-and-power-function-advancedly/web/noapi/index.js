
const noapi = require('../../../noapi');
const power = require('./power');
const assignRules = require('./assignRules');

const options = {power, assignRules};
module.exports = noapi(options);