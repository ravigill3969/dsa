/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  function robLinear(arr) {
    let prev2 = 0,
      prev1 = 0;
    for (let num of arr) {
      let cur = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  }

  // Case 1: rob from house 0 → n-2
  // Case 2: rob from house 1 → n-1
  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
};

// Example
console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 2, 3])); // 3
