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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let newRoot = root;
  while (true) {
    if (newRoot.val > val) {
      if (!newRoot.left) {
        newRoot.left = new TreeNode(val);
        return root;
      }
      newRoot = newRoot.left;
    } else if (newRoot.val < val) {
      if (!newRoot.right) {
        newRoot.right = new TreeNode(val);
        return root;
      }
      newRoot = newRoot.right;
    }
  }
};
