/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.keyRange = 769;
  this.buckets = [];
  for(let i=0;i<this.keyRange;i++){
    this.buckets.push(new Bucket())
  }
};

MyHashSet.prototype._hash = function(key){
  return key % this.keyRange
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let value = this._hash(key);
  if(!this.buckets[value].exists(key)){
    this.buckets[value].insert(key)
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let value = this._hash(key);
  if(this.buckets[value].exists(key)){
    this.buckets[value].delete(key)
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let value = this._hash(key);
  return this.buckets[value].exists(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

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

function Bucket(){
  this.linkList = new MyLinkedList();
}

Bucket.prototype.insert = function(key){
  if(!this.linkList.contains(key)){
    this.linkList.addAtHead(key)
  }
}

Bucket.prototype.delete = function(key){
  this.linkList.deleteByKey(key)
}

Bucket.prototype.exists = function(key){
  return this.linkList.contains(key);
}

module.exports = MyHashSet