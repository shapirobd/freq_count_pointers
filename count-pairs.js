// add whatever parameters you deem necessary
function countPairs(arr, num) {
	arr.sort((a, b) => a - b);
	let count = 0;
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === num) {
			count++;
			left++;
			right--;
		}
		if (sum < num) left++;
		if (sum > num) right--;
	}
	return count;
}

module.exports = countPairs;
