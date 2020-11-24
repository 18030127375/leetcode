const MaxHeap = require("./MaxHeap");

/**
 * MaxHeap
 */

let arr = [10, 7, 2, 5, 1];
let heap = new MaxHeap(arr);
heap.insert(16);
console.log(heap);
