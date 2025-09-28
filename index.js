class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function arrayToTree(arr) {
  if (arr.length === 0) return null;

  function helper(i) {
    if (i >= arr.length || arr[i] === null) return null; // null for missing nodes
    let node = new TreeNode(arr[i]);
    node.left = helper(2 * i + 1);
    node.right = helper(2 * i + 2);
    return node;
  }

  return helper(0); // root
}

let arr = [3, 9, 20, null, null, 15, 7];
let root = arrayToTree(arr);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let res = 0;

  function r(node, max) {
    res = Math.max(res, max);
    if (node.left) {
      r(node.left, max + 1);
    }

    if (node.right) {
      r(node.right, max + 1);
    }
  }

  r(root, 1);
  console.log(res);

  return res;
};

maxDepth(root);
