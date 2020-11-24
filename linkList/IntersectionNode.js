/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = [],
    B = [];
  let nodeA = headA,
    nodeB = headB;
  while (nodeA) {
    A.unshift(nodeA);
    nodeA = nodeA.next;
  }
  while (nodeB) {
    B.unshift(nodeB);
    nodeB = nodeB.next;
  }
  let C = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) C.unshift(A[i]);
  }
  return C[0];
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode2 = function (headA, headB) {
  let nodeA = headA,
    nodeB = headB;
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }
  return nodeA;
};
