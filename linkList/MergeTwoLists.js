/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./HasCycle");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let node = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    } else {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    }
  }
  l1 && (node.next = l1);
  l2 && (node.next = l2);
  return head.next;
};
