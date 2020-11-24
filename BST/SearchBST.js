/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return root;
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else if (root.val < val) {
    return searchBST(root.right, val);
  }
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST2 = function (root, val) {
  while (root) {
    if (root.val === val) {
      return root;
    } else if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    }
  }
  return root;
};
