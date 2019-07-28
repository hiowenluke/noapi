
const fn = async (query) => {
	let isShowBom = false;

	if (query.formname === 'goods') {
		isShowBom = true;
	}

	return {
		formname: query.formname,
		tableName: query.tablename,
		billName: query.billname,
		infoName: query.infoname,
		isBill: query.isBill,
		isInfo: query.isInfo,
		isShowBom: isShowBom,
	};
};

module.exports = fn;
