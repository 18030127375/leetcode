/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(node, lower, upper) {
    if (!node) return true;
    if (node.val <= lower || node.val >= upper) return false;
    return (
      helper(node.left, lower, node.val) && helper(node.right, node.val, upper)
    );
  }
  return helper(root, -Infinity, Infinity);
};

/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST2 = function (root) {
  if (!root) return true;
  let inorder = -Infinity;
  let isValid = true;
  function helper(node) {
    if (node.left) helper(node.left);
    isValid = node.val > inorder && isValid;
    inorder = node.val;
    if (node.right) helper(node.right);
  }
  helper(root);
  return isValid;
};

/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST3 = function (root) {
  let sta = [];
  function helper(node) {
    if (!node) return;
    helper(node.left);
    sta.push(node.val);
    helper(node.right);
  }
  helper(root);
  for (let i = 1; i < sta.length; i++) {
    if (sta[i] <= sta[i - 1]) return false;
  }
  return true;
};
