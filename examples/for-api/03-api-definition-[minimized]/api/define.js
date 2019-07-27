
// The minimized api definition is just some demo urls,
// without the properties "api", "title", "url", "params", "result" and "test".

// The api definition can be simplified like above when the project is just started.

// It is recommended to identify the test cases ASAP to ensure that development goals do not deviate.
// see "02-api-definition-[complete]" for more details.

const me = [
	'http://localhost:3000/bill/form/crud?formname=trader',
	'http://localhost:3000/info/form/crud?formname=goods',
	'http://localhost:3000/info/form/crud?formname=employee',
];

// Equal to:
//		const me = [
//
//			{
//				url: 'http://localhost:3000/bill/form/crud?formname=trader',
//			},
//
//			{
//				url: 'http://localhost:3000/info/form/crud?formname=goods',
//			},
//
//			{
//				url: 'http://localhost:3000/info/form/crud?formname=employee',
//			},
//
//		];

module.exports = me;
