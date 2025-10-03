// Node definition
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Build binary tree from array (level-order)
function buildTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;

  let root = new TreeNode(arr[index]);
  root.left = buildTree(arr, 2 * index + 1);
  root.right = buildTree(arr, 2 * index + 2);

  return root;
}

// Example usage
let arr = [3, 1, 4, 3, null, 1, 5];
let root = buildTree(arr);

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let res = 0;
  if (!root) return res;

  function rec(node, curMax) {
    if (node.val >= curMax) {
      res++;
    }

    curMax = Math.max(curMax, node.val);

    if (node.left) {
      rec(node.left, curMax);
    }
    if (node.right) {
      rec(node.right, curMax);
    }
  }

  rec(root, -Infinity);

  return res;
};

let res = goodNodes(root);

console.log(res);
