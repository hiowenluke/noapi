
// Fake lib
const lib = {
	async getTableNameByFormName(formname) {
		return 'tbl_' + formname;
	}
};

const fn = async ({query}) => {
	query.tablename = await lib.getTableNameByFormName(query.formname);
};

module.exports = fn;
