class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

function PO(root) {
  let res = [];

  function bt(r) {
    if (r == null) {
      return;
    }
    res.push(r.val);

    bt(r.left);

    bt(r.right);
  }

  bt(root);

  return res;
}

let res = PO(root);
console.log(res);
