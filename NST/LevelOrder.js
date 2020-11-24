/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let sta = [],
    newSta = [];
  root && sta.push(root);
  while (sta.length) {
    let tmp = [],
      len = sta.length;
    while (len--) {
      let node = sta.shift();
      tmp.push(node.val);
      node.children && sta.push(...node.children);
    }
    newSta.push(tmp);
  }
  return newSta;
};

module.exports.levelOrder = levelOrder;
