/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let map = new Map();
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    max = Math.max(max, map.get(nums[i]));
  }

  let r = 0;
  for (let [k, v] of map) {
    if (v === max) {
      r += v;
    }
  }
  console.log(r);
  return r;
};

let nums = [1, 2, 2, 3, 1, 4];

maxFrequencyElements(nums);
