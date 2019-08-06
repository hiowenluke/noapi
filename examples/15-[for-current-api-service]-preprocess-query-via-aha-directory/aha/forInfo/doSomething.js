
const fn = ({query}) => {
	if (!query.isInfo) return;

	query.infoname = query.formname;
};

module.exports = fn;
