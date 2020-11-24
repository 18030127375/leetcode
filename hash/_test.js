const MyhashSet = require('./MyHashSet');

/**
 * MyHashSet
 */
let myHashSet = new MyhashSet();
myHashSet.add(1);
myHashSet.add(2);
console.log(myHashSet.contains(1));
console.log(myHashSet.contains(3));

myHashSet.add(2);
console.log(myHashSet.contains(2));

myHashSet.remove(2);
console.log(myHashSet.contains(2));

