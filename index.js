class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);

function serialize(root) {
  let str = "";

  function dfs(r) {
    if (r === null) {
      str = str + "null" ;
      return;
    }
    str = str + String(r.val) + ",";
    dfs(r.left);

    str = str + ",";
    dfs(r.right);
  }

  dfs(root);

  return str;
}

function deserialize(data) {
  let values = data.split(",");

  let index = 0;

  function buildTree() {
    if (values[index] === "null") {
      index++;
      return null;
    }

    let node = new TreeNode(Number(values[index]));
    index++;

    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
}

let res = serialize(root);

res = deserialize(res);

console.log(res);
