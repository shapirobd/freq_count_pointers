// add whatever parameters you deem necessary
function separatePositive(nums) {
	// set left to start
	let left = 0;
	// set right to end
	let right = nums.length - 1;
	while (left < right) {
		// if nums[left] is negative and nums[right] is positive
		if (nums[left] < 0 && nums[right] > 0) {
			// swap them, then increment left & decrement right
			let temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			left++;
			right--;
		} else if (nums[left] > 0) {
			// else if nums[left] is positive (in correct place), increment left
			left++;
		} else if (nums[right] < 0) {
			// else if nums[right] is negative (in correct place), decrement right
			right--;
		}
	}

	return nums;
}

module.exports = separatePositive;
