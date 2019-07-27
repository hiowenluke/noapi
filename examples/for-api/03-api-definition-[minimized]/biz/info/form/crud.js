
const fn = async (query) => {
	let isShowBom = false;

	if (query.formname === 'goods') {
		isShowBom = true;
	}

	return {
		formname: query.formname,
		isShowBom: isShowBom,
	};
};

module.exports = fn;
