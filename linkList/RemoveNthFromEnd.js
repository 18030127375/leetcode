/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let node = head;
  while (node) {
    node = node.next;
    len++;
  }
  if (n === len) {
    head = head.next;
    return head;
  } else {
    node = head;
    len -= n;
    while (--len > 0) {
      node = node.next;
    }
    node.next = node.next ? node.next.next : null;
    return head;
  }
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nodeA = head;
  let nodeB = head;
  for (let i = 0; i < n; i++) {
    nodeB = nodeB.next;
  }
  if (!nodeB) return nodeA.next;
  while (nodeB && nodeB.next) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  nodeA.next = nodeA.next && nodeA.next.next;
  return head;
};
