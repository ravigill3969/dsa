/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum / k;

  for (let i = 1; i < nums.length - k + 1; i++) {
    console.log(nums[i - 1], nums[i - 1 + k]);
    sum = sum - nums[i - 1] + nums[i + k - 1];
    let avg = sum / k;

    max = Math.max(avg, max);
  }

  console.log(max);
};

findMaxAverage((nums = [0, 1, 1, 3, 3]), (k = 4));
