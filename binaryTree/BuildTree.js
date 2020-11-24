/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 已知中序遍历和后序遍历构造树结构
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let postIndex = postorder.length - 1;

  function helper(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return null;
    let root = new TreeNode(postorder[postIndex]);
    let inIndex = inorder.indexOf(root.val);
    postIndex--;

    root.right = helper(inIndex + 1, rightIndex);
    root.left = helper(leftIndex, inIndex - 1);
    return root;
  }

  return helper(0, inorder.length - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 已知前序遍历和中序遍历构造树结构
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree2 = function (preorder, inorder) {
  let preIndex = 0;
  function helper(lIndex, rIndex) {
    if (lIndex > rIndex) return null;
    let root = new TreeNode(preorder[preIndex]);
    let inIndex = inorder.indexOf(root.val);
    preIndex++;
    root.left = helper(lIndex, inIndex - 1);
    root.right = helper(inIndex + 1, rIndex);
    return root;
  }
  return helper(0, inorder.length - 1);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports.buildTree = buildTree;
