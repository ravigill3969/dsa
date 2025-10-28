/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = new Array(height.length).fill(0);
  let rightMax = new Array(height.length).fill(0);
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max;
    max = Math.max(max, height[i]);
  }

  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = max;
    max = Math.max(max, height[i]);
  }

  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    let min = Math.min(rightMax[i], leftMax[i]);
    let res = min - height[i];

    if (res > 0) {
      sum += res;
    }
  }

  return sum
};

let res = trap((height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(res);
