
// Note that the parameter name of the function must be the same as the parameter name in the url.

// E.g.:								formname		obj						  arr
// http://localhost:3000/bill/form/crud?formname=trader&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]

const fn = async (formname, obj, arr) => {
	obj = JSON.parse(obj);
	arr = JSON.parse(arr);
	return {formname, obj, arr};
};

module.exports = fn;
