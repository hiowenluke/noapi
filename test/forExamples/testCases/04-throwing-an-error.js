
const me = [

	'/do/say/hi',
	{
		verify(result) {
			return result.error.message.indexOf('something is wrong') >= 0;
		}
	},
];

module.exports = me;
