
const fn = ({query}) => {

	// demo for changing parameters in query
	query.formname = query.formname.toUpperCase();
};

module.exports = fn;
