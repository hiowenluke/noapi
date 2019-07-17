
const fn = async (query) => {
	return {
		formName: query.formname,
		tableName: query.tablename,
		billName: query.billname,
		infoName: query.infoname,
		isBill: query.isBill,
		isInfo: query.isInfo,
	};
};

module.exports = fn;
