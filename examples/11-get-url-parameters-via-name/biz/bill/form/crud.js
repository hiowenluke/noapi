
// According to the parameters name of the function, take the value from the url parameters.

// E.g.:								formName		obj						  arr
// http://localhost:3000/bill/form/crud?formName=trader&obj={"date":"2019-05-01"}&arr=[1,"abc",{"tel":12345678}]

const fn = async (formName, obj, arr) => {
	obj = JSON.parse(obj);
	arr = JSON.parse(arr);
	return {formName, obj, arr};
};

module.exports = fn;
