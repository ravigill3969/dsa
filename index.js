/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {boolean}
 */
function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  let graph = new Map();

  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let visited = new Set();

  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);

    let neighbours = graph.get(node) || [];

    for (let nei of neighbours) {
      if (nei === parent) continue;
      if (!dfs(nei, node)) return false;
    }

    return true;
  }

  if (!dfs(0, -1)) return false;
  console.log(visited.size);
  return visited.size == n;
}

console.log(
  validTree(
    (n = 5),
    (edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ])
  )
); // true
