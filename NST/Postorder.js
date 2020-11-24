/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let arr = [];
  function helper(node) {
    if (!node) return;
    let index = 0;
    if (node.children) {
      while (index < node.children.length) {
        helper(node.children[index]);
        index++;
      }
    }
    arr.push(node.val);
  }
  helper(root);
  return arr;
};
