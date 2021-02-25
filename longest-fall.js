// add whatever parameters you deem necessary
function longestFall(arr) {
	if (arr.length === 0) return 0;
	let fallLength = 1;
	let longestFall = fallLength;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] < arr[i]) {
			fallLength++;
			if (fallLength > longestFall) longestFall = fallLength;
		} else {
			fallLength = 1;
		}
	}
	return longestFall;
}

module.exports = longestFall;
