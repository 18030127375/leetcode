/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  let vals = sums(root);
  return vals.some((value) => value === sum);
};

function sums(root) {
  if (!root.left && !root.right) return [root.val];
  let letfVal = [],
    rightVal = [];
  if (root.left) letfVal = sums(root.left);
  if (root.right) rightVal = sums(root.right);
  let vals = [...letfVal, ...rightVal];
  return vals.map((value) => value + root.val);
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum2 = function (root, sum) {
  if (!root) return false;
  if (root.left === null && root.right === null) {
    return root.val === sum;
  }
  return (
    hasPathSum2(root.left, sum - root.val) ||
    hasPathSum2(root.right, sum - root.val)
  );
};

module.exports.hasPathSum = hasPathSum;
