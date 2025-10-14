/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let arr = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    let newArr = new Array(n).fill(1);
    for (let j = 1; j < n; j++) {
      newArr[j] = newArr[j - 1] + arr[j];
    }
    arr = newArr;
  }
  return arr[arr.length - 1];
};

uniquePaths((m = 3), (n = 7));
