class TreeNode {
  constructor(val, right = null, left = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

// Construct the tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

function bfs(root) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    console.log(node.val);

    if (node && node.right) {
      queue.push(node.right);
    }
    if (node && node.left) {
      queue.push(node.left);
    }
  }
}

bfs(root);
