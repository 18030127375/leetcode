/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  function dsf(node) {
    if (!node) return false;
    let lson = dsf(node.left);
    let rson = dsf(node.right);
    if (
      (lson && rson) ||
      ((node.val === p.val || node.val === q.val) && (lson || rson))
    ) {
      ans = node;
    }
    return lson || rson || node.val === p.val || node.val === q.val;
  }
  dsf(root);
  return ans;
};
