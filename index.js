// 📌 Problem Statement:
// Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there isn’t one, return 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let len = 0;
  let map = new Map();

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      len = i + 1;
    }

    if (map.has(sum - k)) {
      len = Math.max(len, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return len;
};
let entry = {
  nums: [8, -1, 5, -2, 3, -3],
  k: -3,
};
console.log(maxSubArrayLen(entry.nums, entry.k));
