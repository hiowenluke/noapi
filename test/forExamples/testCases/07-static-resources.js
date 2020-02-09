
const me = [

	'/',
	{
		verify(result) {
			return result.indexOf('Hello, world!') >= 0;
		}
	},

	'/images',
	{
		verify(result) {
			return result.indexOf('Directory is not supported') >= 0;
		}
	},

	'/images/1.jsx',
	{
		verify(result) {
			return result.indexOf('File type .jsx is not supported') >= 0;
		}
	},

	'/images/guitar.png',
	{
		verify(result) {
			return result.indexOf('\u0000') >= 0;
		}
	},

	'/about',
	{
		success: true,
		data: {
			"version": "1.0.0"
		}
	},
];

module.exports = me;
