/**
 * @param {Int32Array[]} heights
 * @return {number}
 */
function largestHistogram(heights) {
  let stack = [];
  let max = 0;

  for (let i = 0; i <= heights.length; i++) {
    let h;
    if (i === heights.length) {
      h = 0; // sentinel
    } else {
      h = heights[i];
    }

    while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
      let ele = heights[stack.pop()];
      let area = 0;

      if (stack.length === 0) {
        area = i * ele;
      } else {
        area = ele * (i - stack[stack.length - 1] - 1);
      }

      if (area > max) {
        max = area;
      }
    }

    stack.push(i);
  }

  return max;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0;
  let row = matrix.length;
  let col = matrix[0].length;

  let arr = [];

  for (let i = 0; i < row; i++) {
    let cArr = new Array(col).fill(0);
    arr.push(cArr);
  }

  for (let c = 0; c < col; c++) {
    let sum = 0;
    for (let r = 0; r < row; r++) {
      if (matrix[r][c] === "0") {
        sum = 0;
      } else {
        sum += 1;
      }

      arr[r][c] = sum;
    }
  }

  let res = 0;
  for (let r = 0; r < arr.length; r++) {
    let histogram = arr[r];
    let area = largestHistogram(histogram);

    res = Math.max(area, res);
  }

  console.log(res);
};

maximalRectangle(
  (matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
