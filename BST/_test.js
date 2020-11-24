const BSTIterator = require("./BSTIterator");
const { deleteNode } = require("./DeleteNode");
const {
  containsNearbyAlmostDuplicate,
} = require("./ContainsNearbyAlmostDuplicate");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function inOrder(root) {
  if (root.left) inOrder(root.left);
  console.log(root.val);
  if (root.right) inOrder(root.right);
}

/**
 * BSTIterator
 */
// let root = new TreeNode(5);
// let iterator = new BSTIterator(root);
// console.log(iterator.hasNext());
// console.log(iterator.next());

/**
 * DeleteNode
 */
// let root = new TreeNode(5);
// root.left = new TreeNode(3);
// root.right = new TreeNode(6);
// root.left.left = new TreeNode(2);
// root.left.right = new TreeNode(4);
// root.right.right = new TreeNode(7);

// deleteNode(root, 3);
// inOrder(root);

/**
 * ContainsNearbyAlmostDuplicate
 */
let arr = [0, 5, 0];
console.log(containsNearbyAlmostDuplicate(arr, 2, 4));
