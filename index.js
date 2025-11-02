/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let arr = Array.from({ length: m }, () => new Array(n).fill(0));
  let res = 0;

  for (let [i, j] of guards) arr[i][j] = "G";
  for (let [i, j] of walls) arr[i][j] = "W";

  function goAllDirection(i, j) {
    // down
    for (let x = i + 1; x < m; x++) {
      if (arr[x][j] === "W" || arr[x][j] === "G") break;
      if (arr[x][j] === 0) arr[x][j] = -1;
    }

    // up
    for (let x = i - 1; x >= 0; x--) {
      if (arr[x][j] === "W" || arr[x][j] === "G") break;
      if (arr[x][j] === 0) arr[x][j] = -1;
    }

    // right
    for (let y = j + 1; y < n; y++) {
      if (arr[i][y] === "W" || arr[i][y] === "G") break;
      if (arr[i][y] === 0) arr[i][y] = -1;
    }

    // left
    for (let y = j - 1; y >= 0; y--) {
      if (arr[i][y] === "W" || arr[i][y] === "G") break;
      if (arr[i][y] === 0) arr[i][y] = -1;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "G") {
        goAllDirection(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) res++;
    }
  }

  return res;
};

let res = countUnguarded(
  4,
  6,
  [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  [
    [0, 1],
    [2, 2],
    [1, 4],
  ]
);

console.log(res); // ✅ correct output is 7
