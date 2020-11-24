/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let root = (l3 = new ListNode());
  let units = 0,
    tens = 0;
  while (l1 || l2) {
    let val1 = (l1 && l1.val) || 0,
      val2 = (l2 && l2.val) || 0;
    let sum = val1 + val2 + tens;

    units = sum % 10;

    l3 = l3.next = new ListNode(units);

    tens = Math.floor(sum / 10);
    l1 = l1 === null ? l1 : l1.next;
    l2 = l2 === null ? l2 : l2.next;
  }
  if (tens) l3.next = new ListNode(tens);
  return root.next;
};

module.exports.addTwoNumbers = addTwoNumbers;
