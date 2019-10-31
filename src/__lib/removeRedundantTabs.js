
// Remove redundant tabs for template string

// E.g.:
// 				`
// 					---------------------------------
// 					Show some tips if needed.
// 					---------------------------------
// 				`

// To:
// `
// ---------------------------------
// Show some tips if needed.
// ---------------------------------
// `

/** @name lib.removeRedundantTabs */
const fn = (tips) => {
	let redundantTabs = tips.match(/\n(\t+)(?=\S)/);
	if (redundantTabs) {
		redundantTabs = redundantTabs[1];

		const reg = new RegExp('\n' + redundantTabs, 'g');
		tips = tips
			.replace(reg, '\n')
			.replace(/^\s*\n/, '')
			.replace(/\n\t*$/, '')
			.replace(/\t/g, ' '.repeat(4))
		;
	}

	return tips;
};

module.exports = fn;
