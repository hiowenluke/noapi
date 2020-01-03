
const me = [

	'/user/login?username=owen&password=123',
	{
		before: [
			'/user/register?username=owen&password=123',
		],

		after: [
			'/user/kill?username=owen',
		],

		verify(result) {
			return result.data === true;
		}
	},

	'/user/logout?username=owen',
	{
		before: [
			'/user/register?username=owen&password=123',
			'/user/login?username=owen&password=123',
		],

		resultUrl: '/user/get?username=owen',

		after: [
			'/user/kill?username=owen',
		],

		verify(result) {
			return result.data.isOnline === 0;
		}
	},
];

module.exports = me;
