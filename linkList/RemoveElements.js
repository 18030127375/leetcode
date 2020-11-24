/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { ListNode } = require("./HasCycle");

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let node = head;
  let tmp = new ListNode();
  tmp.next = head;
  let newHead = tmp;
  while (node) {
    if (node.val === val) {
      tmp.next = node.next;
    } else {
      tmp = node;
    }

    node = node.next;
  }
  return newHead.next;
};

module.exports.removeElements = removeElements;
