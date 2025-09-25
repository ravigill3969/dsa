// Problem Statement

// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let sum = 0;
  let count = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let mod = ((sum % k) + k) % k;

    if (map.has(mod)) {
      count += map.get(mod);
    }

    map.set(mod, (map.get(mod) || 0) + 1);
  }

  console.log(count);
};

subarraysDivByK((nums = [4, 5, 0, -2, -3, 1]), (k = 5));
