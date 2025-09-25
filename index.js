// Given an integer array nums and an integer k, return true if nums has a continuous subarray of length at least two whose elements sum up to a
//  multiple of k, or false otherwise.

// An integer x is a multiple of k if there exists an integer n such that x = n * k.
// 0 is always a multiple of k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let mod = sum % k;

    if (map.has(mod)) {
      let diff = i - map.get(mod);

      if (diff >= 2) {
        console.log(true);
        return true;
      }
    }

    if (!map.has(mod)) {
      map.set(mod, i);
    }
  }

  console.log(false);
  return false;
};

checkSubarraySum((nums = [23, 2, 4, 6, 7]), (k = 6));
checkSubarraySum((nums = [23, 2, 6, 4, 7]), (k = 6));
checkSubarraySum((nums = [23, 2, 6, 4, 7]), (k = 13));
