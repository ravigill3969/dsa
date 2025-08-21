/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const graph = new Map();

  // build adjacency list
  for (const [u, v] of prerequisites) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push(v);
  }

  let visiting = new Set();
  let visited = new Set();

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    let neighbours = graph.get(node) || [];
    for (let i = 0; i < neighbours.length; i++) {
      if (!dfs(neighbours[i])) return false;
    }

    visiting.delete(node);
    visited.add(node);
    return true;
  }

  for (let [key, value] of graph) {
    if (!dfs(key)) return false;
  }

  return true;
}

console.log(
  canFinish(2, [
    [0, 1],
    [1, 0],
  ])
); // false

console.log(canFinish(2, [[0, 1]])); // true
