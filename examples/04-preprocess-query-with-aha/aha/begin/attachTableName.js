
// Fake lib
const lib = {
	async getTableNameByFormName(formName) {
		return 'tbl_' + formName;
	}
};

const fn = async ({query}) => {
	query.tablename = await lib.getTableNameByFormName(query.formname);
};

module.exports = fn;
