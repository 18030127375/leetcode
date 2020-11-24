/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;
  let newHead = head;
  while (node && node.next) {
    let tmp = node.next;
    node.next = tmp.next;
    tmp.next = newHead;
    newHead = tmp;
  }
  return newHead;
};

module.exports.reverseList = reverseList;
