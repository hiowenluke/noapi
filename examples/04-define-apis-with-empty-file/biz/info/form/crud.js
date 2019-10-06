
const fn = async (query) => {
	let isShowBom = false;

	if (query.formName === 'goods') {
		isShowBom = true;
	}

	return {
		formName: query.formName,
		isShowBom: isShowBom,
	};
};

module.exports = fn;
