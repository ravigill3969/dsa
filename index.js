/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = 1;
  let cn = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      cn = nums[i];
      count++;
    }

    if (nums[i] != cn) {
      count--;
    } else {
      count++;
    }
  }

  console.log(cn)
  return cn
}

majorityElement((nums = [5, 5, 1, 1, 1, 5, 5]));
