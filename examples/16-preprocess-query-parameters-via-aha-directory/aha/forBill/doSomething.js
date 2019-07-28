
const fn = ({query}) => {
	if (!query.isBill) return;

	query.billname = query.formname;
};

module.exports = fn;
