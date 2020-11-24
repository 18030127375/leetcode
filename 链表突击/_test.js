const { addTwoNumbers } = require("./AddTwoNumbers");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * AddTwoNumbers
 */
let l1 = new ListNode(2, new ListNode(4, new ListNode(3))),
  l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
