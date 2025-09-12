/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0]; // dp[0]
  let prev1 = Math.max(nums[0], nums[1]); // dp[1]

  for (let i = 2; i < nums.length; i++) {
    let curr = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

console.log(rob([1, 1, 3, 3]));
