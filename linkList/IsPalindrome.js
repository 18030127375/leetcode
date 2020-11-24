/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  let slow = head,
    fast = head.next,
    node = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  let next = slow.next;
  slow.next = null;
  let pre = head;
  next = reverseList(next);

  while (next && pre) {
    if (next.val != pre.val) {
      return false;
    }
    next = next.next;
    pre = pre.next;
  }

  return true;

  function reverseList(head) {
    let node = head;
    let newHead = head;
    while (node && node.next) {
      let tmp = node.next;
      node.next = tmp.next;
      tmp.next = newHead;
      newHead = tmp;
    }
    return newHead;
  }
};

module.exports.isPalindrome = isPalindrome;
