
const fn = ({query}) => {
	if (!query.isinfo) return;

	query.infoname = query.formname;
};

module.exports = fn;
