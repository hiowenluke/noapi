
// Add lowercase for all parameters in query:
//		query.formname = query.formName

/** @name noapi.params.attachLowerCase */
const fn = async (query, isRemoveOriginalOne) => {

	Object.keys(query).forEach(Key => {
		const key = Key.toLowerCase();

		if (key !== Key && typeof query[Key] !== 'undefined') {
			query[key] = query[Key];

			if (isRemoveOriginalOne) {
				delete query[Key];
			}
		}
	});
};

module.exports = fn;
