
/** @name lib.tryParseJsonStr */
const fn = {
	do(jsonString) {
		const o = this.eval(jsonString) || this.parse(jsonString);
		if (o && typeof o === "object") {
			return o;
		}
	},

	eval(jsonString) {
		try {
			let o;
			eval('o = ' + jsonString);
			return o;
		}
		catch (e) {}
	},

	parse(jsonString) {
		try {
			return JSON.parse(jsonString);
		}
		catch (e) {}
	}
};

module.exports = fn;
