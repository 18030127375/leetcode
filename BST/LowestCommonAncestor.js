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
  function dsf(root, p, q) {
    if (!root) return false;

    let lson = dsf(root.left, p, q);
    let rson = dsf(root.right, p, q);

    if (
      (lson && rson) ||
      ((lson || rson) && (root.val === p.val || root.val === q.val))
    )
      ans = root;

    return lson || rson || root.val === p.val || root.val === q.val;
  }
  dsf(root, p, q);
  return ans;
};
