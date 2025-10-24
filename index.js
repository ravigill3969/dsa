/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let que = [];
  let r = 0;
  let l = 0;

  while (r < nums.length) {
    while (que.length > 0 && nums[que[que.length - 1]] < nums[r]) {
      que.pop();
    }
    que.push(r);

    if (l > que[0]) {
      que.shift();
    }

    while (r -l+ 1 >= k) {
      res.push(nums[que[0]]);
      l++;
    }

    r++;
  }

  console.log(res);
  return res
};

maxSlidingWindow((nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3));
