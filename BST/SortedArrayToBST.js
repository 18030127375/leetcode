/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function helper(left, right) {
    if (left > right) return null;
    let mid = parseInt((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(left, mid - 1);
    node.right = helper(mid + 1, right);

    return node;
  }

  return helper(0, nums.length - 1);
};
