/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "#";
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return new TreeNode(data);
  let deseri = data.split(",");
  let index = 0;
  function dePreErgodic(seri) {
    let node = new TreeNode(seri[index]);
    index++;
    if (node.val === "#") {
      return null;
    }
    node.left = dePreErgodic(seri);
    node.right = dePreErgodic(seri);

    return node;
  }

  return dePreErgodic(deseri);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = { serialize, deserialize };
