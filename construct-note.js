// add whatever parameters you deem necessary
function constructNote(msg, chars) {
	let msgCounter = makeCounter(msg);
	let charsCounter = makeCounter(chars);
	let msgChars = Object.keys(msgCounter);
	for (let char of msgChars) {
		if (!charsCounter[char] || charsCounter[char] < msgCounter[char])
			return false;
	}
	return true;
}

function makeCounter(str) {
	let counter = {};
	for (let char of str) {
		counter[char] = counter[char] + 1 || 1;
	}
	return counter;
}

module.exports = constructNote;
