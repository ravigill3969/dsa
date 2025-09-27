/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = [];
  for (let i = 0; i < triangle.length; i++) {
    dp.push(new Array(triangle[i].length).fill(undefined));
  }

  let n = triangle.length;
  function recursion(i, j) {
    if (i === n - 1) return triangle[i][j];

    if (dp[i][j] !== undefined) return dp[i][j];

    dp[i][j] =
      triangle[i][j] + Math.min(recursion(i + 1, j), recursion(i + 1, j + 1));

    return dp[i][j];
  }

  return recursion(0, 0);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
