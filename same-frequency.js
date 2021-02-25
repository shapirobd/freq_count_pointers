// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
	// create counter for int1 (string)
	const int1Counter = makeCounter(`${int1}`);
	// create counter for int2 (string)
	const int2Counter = makeCounter(`${int2}`);
	// loop over int1.keys()
	for (let key of int1Counter.keys()) {
		if (
			!int2Counter.get(key) ||
			int1Counter.get(key) !== int2Counter.get(key)
		) {
			return false;
		}
	}
	return true;
}

function makeCounter(str) {
	const counter = new Map();
	for (let char of str) {
		counter.set(char, counter.get(char) + 1 || 1);
	}
	return counter;
}

module.exports = sameFrequency;
