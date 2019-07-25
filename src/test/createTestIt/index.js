
const fn = (apiInfo, test) => {
	let {beforeDo, testUrl, params, getResult, afterDo, verify} = test;

	it(apiInfo.title, async () => {
		let result;

		// Call specific apis before do with test url if needed.
		// E.g., insert some data to db before do with test url.
		// The beforeDo can be an array, or an api, title, url, or some other specified property.
		if (beforeDo) {
			await baa.beforeDo(beforeDo);
		}

		// Start app server via supertest and send data to it, then get the result.
		result = await request.do(testUrl, params);

		// If there is a getResult property, use it. For example,
		// after deleting the data, user needs to re-acquire the data
		// to determine whether the operation is successful.
		if (getResult) {
			const apiUrl = lib.getApiUrlByTypeStr(getResult);
			apiUrl && (result = await request.do(apiUrl));
		}

		// Call specific apis after get the test result if needed.
		// E.g., delete the inserted data in before.
		// The usage is the same as beforeDo.
		if (afterDo) {
			await baa.afterDo(afterDo);
		}

		// Use verify() to verify the result
		const isOK = verify(result, JSON.stringify(result));
		expect(isOK).to.be.true;
	});
};

module.exports = fn;
