
const fn = async (query) => {
	return {
		formName: query.formname,
		tableName: query.tablename,
		billName: query.billname,
		infoName: query.infoname,
		isbill: query.isbill,
		isinfo: query.isinfo,
	};
};

module.exports = fn;
