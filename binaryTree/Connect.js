/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  let len = queue.length - 1,
    index = 0;

  while (index <= len) {
    let node = queue[index];
    if (index < len) {
      node.next = queue[index + 1];
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (index == len) {
      len = queue.length - 1;
    }
    index++;
  }
  return root;
};

module.exports.connect = connect;
