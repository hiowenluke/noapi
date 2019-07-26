
const fn = async (query) => {
	return [
		{
			fieldname: 'billid',
			type: 'number',
		},

		{
			fieldname: 'billcode',
			type: 'string',
		}
	];
};

module.exports = fn;
