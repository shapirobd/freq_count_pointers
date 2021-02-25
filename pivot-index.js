// add whatever parameters you deem necessary
function pivotIndex(nums) {
	// set rightSum to be the total of all nums in array
	let rightSum = nums.reduce((a, b) => a + b, 0);
	// set leftSum to be 0
	let leftSum = 0;
	// start pivotIdx at -1 (returns -1 if no pivot index found)
	let pivotIdx = -1;
	// loop through array of nums
	for (let i = 0; i < nums.length; i++) {
		// add current num to leftSum (rightSum's first idx = leftSum's last idx)
		leftSum += nums[i];
		// if leftSum = rightSum, set pivotIdx to the current idx and break out of loop
		if (leftSum === rightSum) {
			pivotIdx = i;
			break;
		}
		// otherwise, subtract current num from rightSum (rightSum's first idx shifts to the right by 1)
		rightSum -= nums[i];
	}

	return pivotIdx;
}

module.exports = pivotIndex;

// [1, 2, 1, 6, 3, 1]
//
// i = 3
// leftSum = 10
// rightSum = 10
