/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let globalMax = -Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max + nums[i]);
    globalMax = Math.max(max, globalMax);
  }

  console.log(max);
  return globalMax;
}

maxSubArray((nums = [2, -3, 4, -2, 2, 1, -1, 4]));
maxSubArray((nums = [-1]));
