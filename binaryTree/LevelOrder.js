/**
 * 二叉树节点定义
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queueMirror = [];
  let queue = [root];

  let level = [];
  while (queue.length) {
    let subLevel = [];
    queueMirror = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.left) queueMirror.push(node.left);
      if (node.right) queueMirror.push(node.right);
      subLevel.push(node.val);
    }
    level.push(subLevel);
    queue = [...queueMirror];
  }
  return level;
};

module.exports.levelOrder = levelOrder;
