/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let target = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= target) {
      target = i;
    }
  }

  return target == 0;
}

let res = canJump((nums = [2, 3, 1, 1, 4]));
console.log(res);

res = canJump((nums = [1, 2, 1, 0, 1]));
console.log(res);
