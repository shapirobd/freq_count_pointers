// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	if (str1 === str2) return true;
	if (str1.length >= str2.length) return false;

	let str2Tracker = makeOrderTracker(str2);
	for (let i = 0; i < str1.length - 1; i++) {
		let char = str1[i];
		let nextChar = str1[i + 1];
		if (str2Tracker[char] === undefined || str2Tracker[nextChar] === undefined)
			return false;
		if (nextChar !== char) {
			if (str2Tracker[char] > str2Tracker[nextChar]) return false;
		}
	}
	return true;
}

function makeOrderTracker(str) {
	let tracker = {};
	for (let i = 0; i <= str.length - 1; i++) {
		let char = str[i];
		if (tracker[char] === undefined) tracker[char] = i;
	}
	return tracker;
}

module.exports = isSubsequence;
