/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {

    if(triangle.length === 1) return triangle[0][0]

  let dp = [];

  for (let i = 0; i < triangle.length; i++) {
    dp.push(new Array(triangle[i].length).fill(null));
  }

  function dfs(i, j) {
    if (j > triangle[i].length - 1) return 0;

    if (i === triangle.length - 1) return triangle[i][j];

    dp[i][j] = triangle[i][j] + Math.min(dfs(i + 1, j), dfs(i + 1, j + 1));

    return dp[i][j];
  }

  dfs(0, 0);

  return dp[0][0];
};

minimumTotal((triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
