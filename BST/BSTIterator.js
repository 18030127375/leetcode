/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.sta = [];
  this.leftMostInorder(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let node = this.sta.shift();
  if (node.right) this.leftMostInorder(node.right);

  return node.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.sta.length > 0;
};

BSTIterator.prototype.leftMostInorder = function (root) {
  while (root) {
    this.sta.unshift(root);
    root = root.left;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
