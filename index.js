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

  const visiting = new Set();
  const visited = new Set();

  function dfs(node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    const neighbors = graph.get(node) || [];
    for (let i = 0; i < neighbors.length; i++) {
      if (!dfs(neighbors[i])) return false;
    }

    visiting.delete(node);
    visited.add(node);

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
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
