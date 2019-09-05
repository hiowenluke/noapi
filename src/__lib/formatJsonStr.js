
/** @name lib.formatJsonStr */
const fn = (obj) => {
	let jsonStr = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 4);

	jsonStr = jsonStr

		// Remove double quotes
		.replace(/"([^(")]+)":/g,"$1:")

		// Insert a line break between:
		//		},
		//		key: {
		.replace(/(\n\s+?[\]}]),(?=\n\s+?\S+?: {)/g, '$1,\n')

		// Insert a line break between:
		//		},
		//		{
		.replace(/(\n\s+?}),(?=\n\s+?{\n)/g, '$1,\n')

		// Four spaces to one tab char
		.replace(/ {4}/g, '\t')
	;

	return jsonStr;
};

module.exports = fn;
