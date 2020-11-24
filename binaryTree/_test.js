const { levelOrder } = require("./LevelOrder");
const { hasPathSum } = require("./HasPathSum");
const { buildTree } = require("./BuildTree");
const { connect } = require("./Connect");
const { serialize, deserialize } = require("./Serialize");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * LevelOrder
 */
// let root = new TreeNode(3);
// let a = new TreeNode(9);
// let b = new TreeNode(20);
// let c = new TreeNode(15);
// let d = new TreeNode(7);

// root.left = a;
// root.right = b;
// b.left = c;
// b.right = d;

// console.log(levelOrder(root));

/**
 * HasPathSum
 */
// let root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(11);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(2);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(4);
// root.right.right.right = new TreeNode(1);

// let root = new TreeNode(1);
// root.left = new TreeNode(2);

/**
 * BuildTree
 */
// let inorder = [9, 3, 15, 20, 7],
//   postOrder = [9, 15, 7, 20, 3];

// console.log(buildTree(inorder, postOrder));

/**
 * Connect
 */
// console.log(connect([]));

/**
 * Serialize
 */
let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

let seri = serialize(root);
console.log(seri);
console.log(deserialize(seri));
