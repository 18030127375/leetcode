/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let arr = [];
  arr.push(root.val);
  if (root.children) {
    let len = root.children.length;
    while (len) {
      arr.push(...preorder(root.children[root.children.length - len]));
      len--;
    }
  }
  return arr;
};
