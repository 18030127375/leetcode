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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let vals = [];
  vals.push(root.val);
  if (root.left) vals.push(...preorderTraversal(root.left));
  if (root.right) vals.push(...preorderTraversal(root.right));
  return vals;
};

let preorderTraversal2 = function (root) {
  if (!root) return [];
  let sta = [root];
  let preTree = [];
  while (sta.length > 0) {
    let top = sta.pop();
    preTree.push(top.val);
    if (top.right) sta.push(top.right);
    if (top.left) sta.push(top.left);
  }
  return preTree;
};
