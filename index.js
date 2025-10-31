/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let res = 0;
  let sum = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  console.log(res);
  return res;
};

let res = subarraySum((nums = [1, 1, 1]), (k = 2));
console.log(res);
