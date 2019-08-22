/*
	Convert multiple path strings to json objects

	Input:
	-------------------------------------------
	paths = [
		"/bom/form/getData",
		"/bom/form/check/do",
		"/bom/form/check/undo",
		"/bom/form/saveData/main/update",
		"/bom/list/getMainInfo",
		"/mrp/calc",
		"/mrp/showmanuplans",
	];
	-------------------------------------------

	Output:
	-------------------------------------------
	{
		"bom": {
			"form": {
				"getData": {},
				"check": {
					"do": {},
					"undo": {}
				},
				"saveData": {
					"main": {
						"update": {}
					}
				}
			},
			"list": {
				"getMainInfo": {}
			}
		},
		"mrp": {
			"calc": {},
			"showmanuplans": {}
		}
	}
	-------------------------------------------
*/

const utils = require('..');

/** @name noapi.url.pathsToJson */
const fn = (paths, splitter) => {

	typeof paths === 'string' && (paths = [paths]);

	// Note that the definition here is result.data {} instead of result.
	const result = {data: {}};

	paths.forEach(path => { // "/bom/form/getData"
		utils.url.pathToJson(path, splitter, result); // {bom.form.getData}
	});

	// console.log(JSON.stringify(result.data, null, 4));
	return result.data;
};

module.exports = fn;
