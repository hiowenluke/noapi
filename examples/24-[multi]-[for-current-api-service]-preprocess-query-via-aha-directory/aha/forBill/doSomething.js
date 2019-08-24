
const fn = ({query}) => {
	if (!query.isbill) return;

	query.billname = query.formname;
};

module.exports = fn;
