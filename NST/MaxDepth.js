/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  if (root.children.length == 0) return 1;
  let index = 0,
    depth = -Infinity;
  while (index < root.children.length) {
    let res = maxDepth(root.children[index]);
    depth = Math.max(depth, res);
    index++;
  }
  return depth + 1;
};

module.exports.maxDepth = maxDepth;
