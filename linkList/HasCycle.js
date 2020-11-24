/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 判断是否有环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let preNode = head;
  let nextNode = head && head.next;
  while (nextNode && nextNode.next && preNode.val !== nextNode.val) {
    preNode = preNode.next;
    nextNode = nextNode.next.next;
  }
  return !!preNode && !!nextNode && preNode.val === nextNode.val;
};

/**
 * 判断是否有环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function (head) {
  let links = new Map();
  let node = head;
  while (node) {
    if (links.has(node)) {
      return true;
    }
    links.set(node, node.val);
    node = node.next;
  }
  return false;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let links = new Map();
  let node = head;
  while (node) {
    if (links.has(node)) {
      return node;
    }
    links.set(node, node.val);
    node = node.next;
  }
  return null;
};

module.exports.ListNode = ListNode;
module.exports.hasCycle = hasCycle;
