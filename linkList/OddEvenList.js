/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./HasCycle");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head;
  let pre = new ListNode(),
    next = new ListNode();
  let node = head,
    preNode = pre,
    nextNode = next;
  let flag = true;
  while (node) {
    if (flag) {
      preNode.next = node;
      preNode = preNode.next;
    } else {
      nextNode.next = node;
      nextNode = nextNode.next;
    }
    flag = !flag;
    node = node.next;
  }
  nextNode.next = null;
  preNode.next = next.next;
  return pre.next;
};

module.exports.oddEvenList = oddEvenList;
