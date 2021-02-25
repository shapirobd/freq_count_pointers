// add whatever parameters you deem necessary
function averagePair(nums, avg) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let currAvg = (nums[left] + nums[right]) / 2;
		if (currAvg === avg) {
			return true;
		}
		currAvg < avg ? left++ : right--;
	}
	return false;
}

module.exports = averagePair;
