/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  if (nums.length === 1) return nums[0];

  if (nums.length === 2) return (nums[0] + nums[1]) % 10;

  while (nums.length !== 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      let j = i + 1;
      nums[i] = (nums[i] + nums[j]) % 10;
    }

    nums.pop();
  }

  return nums[0]
};

let res = triangularSum((nums = [1, 2, 3, 4, 5]));
console.log(res);
