/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index > this.length - 1) return -1;
  if (index == 0) {
    return this.head.val;
  }
  let n = this.head;
  while (--index) {
    n = n.next;
  }
  return n.next.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new ListNode(val);
  node.next = this.head;
  this.head = node;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new ListNode(val);
  if (this.length == 0) {
    this.head = node;
    this.length++;
    return;
  }
  let n = this.head;
  while (n.next) {
    n = n.next;
  }
  n.next = node;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return;
  let node = new ListNode(val);
  if (index == 0) {
    node.next = this.head;
    this.head = node;
    this.length++;
    return;
  }
  let n = this.head;
  while (--index) {
    n = n.next;
  }
  node.next = n.next;
  n.next = node;
  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.length - 1) return;
  if (index == 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }
  let n = this.head;
  while (--index) {
    n = n.next;
  }
  n.next = n.next ? n.next.next : null;
  this.length--;
};

/**
 * delete by key
 * @param {number} key 
 */
MyLinkedList.prototype.deleteByKey = function(key){
  if(!this.head) return;
  if(this.head.val === key){
    this.head = this.head.next;
    return;
  }
  let parent = this.head,child = this.head.next;
  while(child){
    if(child.val === key){
      parent.next = child.next;
      return;
    }
    parent = child;
    child = child.next;
  }
}

/**
 * check contains
 * @param {number} key 
 */
MyLinkedList.prototype.contains = function(key){
  let node = this.head;
  while(node){
    if(node.val = key){
      return true;
    }
    node = node.next;
  }
  return false;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = MyLinkedList;
