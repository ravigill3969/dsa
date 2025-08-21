/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {boolean}
 */
function countComponents(n, edges) {
  let graph = new Map();

  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;

    visited.add(node);

    let neighbours = graph.get(node) || [];

    for (let n of neighbours) {
      dfs(n);
    }

    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i);
    }
  }

  console.log(count);
  return count;
}

console.log(
  countComponents(
    (n = 6),
    (edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ])
  )
); // true
