
const fn = async (query) => {
	return [
		{
			fieldname: 'id',
			type: 'number',
		},

		{
			fieldname: 'code',
			type: 'string',
		}
	];
};

module.exports = fn;
