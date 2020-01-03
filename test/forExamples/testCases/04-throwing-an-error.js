
const me = [

	'/do/say/hi',
	{
		verify(result) {
			return result.indexOf('something is wrong') >= 0;
		}
	},
];

module.exports = me;
