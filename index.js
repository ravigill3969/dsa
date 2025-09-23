/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let left_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left_sum == total - left_sum - nums[i]) {
      return i;
    }

    left_sum += nums[i];
  }

  return -1;
};

pivotIndex((nums = [1, 7, 3, 6, 5, 6]));
