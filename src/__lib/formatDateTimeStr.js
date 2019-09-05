
/** @name lib.formatDateTimeStr */
const fn = (dateStr) => {
	const date = dateStr ? new Date(dateStr) : new Date();
	const dateTimeStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
		.toISOString()
		.replace(/([-TZ:])|(\.\d{3})/g, '')
	;
	return dateTimeStr;
};

module.exports = fn;
