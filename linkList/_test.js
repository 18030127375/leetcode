const MyLinkedList = require("./MyLinkedList");
const { ListNode, hasCycle } = require("./HasCycle");
const { reverseList } = require("./ReverseList");
const { removeElements } = require("./RemoveElements");
const { oddEvenList } = require("./OddEvenList");
const { isPalindrome } = require("./IsPalindrome");
const MyDoubleLinkedList = require("./MyDoubleLinkedList");

function ergodic(head) {
  let nodeVal = [];
  while (head) {
    nodeVal.push(head.val);
    head = head.next;
  }
  return nodeVal;
}

/**
 * MyLinkedList
 */
// let linkedList = new MyLinkedList();
// linkedList.addAtHead(7);
// linkedList.addAtHead(2);
// linkedList.addAtHead(1);
// linkedList.addAtIndex(3, 0);
// linkedList.deleteAtIndex(2);
// linkedList.addAtHead(6);
// linkedList.addAtTail(4);
// console.log(linkedList.get(4));
// linkedList.addAtHead(4);
// linkedList.addAtIndex(5, 0);
// linkedList.addAtHead(6);

// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);
// console.log(linkedList.get(1));
// linkedList.deleteAtIndex(0);
// console.log(linkedList.get(0));

// linkedList.addAtIndex(0, 10);
// linkedList.addAtIndex(0, 20);
// linkedList.addAtIndex(1, 30);
// console.log(linkedList.get(0));

// linkedList.addAtTail(1);
// console.log(linkedList.get(0));

let linkedList = new MyLinkedList();
linkedList.addAtHead(7);
linkedList.addAtHead(2);
linkedList.addAtHead(1);
linkedList.addAtIndex(3, 0);
linkedList.deleteAtIndex(2);
linkedList.addAtHead(6);
linkedList.addAtTail(4);
linkedList.addAtHead(4);
linkedList.addAtHead(6);

linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
linkedList.deleteAtIndex(0);

linkedList.addAtIndex(0, 10);
linkedList.addAtIndex(0, 20);
linkedList.addAtIndex(1, 30);

linkedList.addAtTail(1);

linkedList.deleteByKey(20)
linkedList.deleteByKey(2)
linkedList.deleteByKey(1)
linkedList.deleteByKey(1)
console.log(ergodic(linkedList.head))

/**
 * HasCycle
 */
// let a = new ListNode(-4);
// let b = new ListNode(0);
// b.next = a;
// let c = new ListNode(2);
// c.next = b;
// let d = new ListNode(3);
// d.next = c;

// let a = new ListNode(1);

// console.log(hasCycle(a));

/**
 * ReverseList
 */
// let a = new ListNode(5);
// let b = new ListNode(4);
// b.next = a;
// let c = new ListNode(3);
// c.next = b;
// let d = new ListNode(2);
// d.next = c;
// let e = new ListNode(1);
// e.next = d;

// console.log(ergodic(reverseList(e)));

/**
 * RemoveElements
 */
// let a = new ListNode(1);
// console.log(ergodic(removeElements(a, 1)));

/**
 * OddEvenList
 */
// let a = new ListNode(5);
// let b = new ListNode(4);
// b.next = a;
// let c = new ListNode(3);
// c.next = b;
// let d = new ListNode(2);
// d.next = c;
// let e = new ListNode(1);
// e.next = d;

// console.log(ergodic(oddEvenList(e)));

/**
 * IsPalindrome
 */
// let a = new ListNode(2);
// let b = new ListNode(1);
// b.next = a;

// console.log(isPalindrome());

/**
 * MyDoubleLinkedList
 */
// let dLinkedList = new MyDoubleLinkedList();
// dLinkedList.addAtHead(2);
// dLinkedList.deleteAtIndex(1);
// dLinkedList.addAtHead(2);
// dLinkedList.addAtHead(7);
// dLinkedList.addAtHead(3);
// dLinkedList.addAtHead(2);
// dLinkedList.addAtHead(5);
// dLinkedList.addAtTail(5);
// dLinkedList.get(5);
// dLinkedList.deleteAtIndex(6);
// dLinkedList.deleteAtIndex(4);
