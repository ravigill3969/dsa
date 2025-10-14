/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  console.log(dp)

  let res = 0;

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    res = Math.max(dp[i], res);
  }
  console.log(dp);
  return res;
};

rob((nums = [1, 3, 1]));
