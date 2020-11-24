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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true;
  function dsf(node) {
    if (!node) return 0;
    let lNum = dsf(node.left);
    let rNum = dsf(node.right);
    if (lNum - rNum > 1 || lNum - rNum < -1) {
      res = false;
    }
    return Math.max(lNum, rNum) + 1;
  }

  dsf(root);
  return res;
};
