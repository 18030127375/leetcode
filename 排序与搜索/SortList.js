/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head,
    fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tmp = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(tmp);
  let h = new ListNode();
  let res = h;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      h.next = left;
      left = left.next;
    } else {
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  h.next = left === null ? right : left;
  return res.next;
};
