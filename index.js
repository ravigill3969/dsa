/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let res = 0;

  let sum = grid[0][0];
  for (let j = 1; j < grid[0].length; j++) {
    sum += grid[0][j];
    grid[0][j] = sum;
  }

  sum = grid[0][0];

  for (let i = 1; i < grid.length; i++) {
    sum += grid[i][0];
    grid[i][0] = sum;
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      let min = Math.min(
        grid[i][j - 1] + grid[i][j],
        grid[i - 1][j] + grid[i][j]
      );

      grid[i][j] = min;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
