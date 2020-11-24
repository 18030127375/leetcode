/**
 * build heap
 */
class MaxHeap {
  constructor(arr) {
    this.heap = [];
    this.buildHeap(arr);
  }
  buildHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }
  shiftUp(index) {
    let p = Math.floor((index - 1) / 2);
    if (this.heap[index] > this.heap[p]) {
      [this.heap[index], this.heap[p]] = [this.heap[p], this.heap[index]];
      return p;
    }
  }
  shiftDown(index) {
    let left = index * 2 + 1,
      right = index * 2 + 2;
    if (
      this.heap[index] < this.heap[left] ||
      this.heap[index] < this.heap[right]
    ) {
      if (this.heap[left] < this.heap[right]) {
        [this.heap[index], this.heap[right]] = [
          this.heap[right],
          this.heap[index],
        ];
        return right;
      } else {
        [this.heap[index], this.heap[left]] = [
          this.heap[left],
          this.heap[index],
        ];
        return left;
      }
    }
  }
  insert(num) {
    this.heap.push(num);
    let index = this.heap.length - 1;
    while (index) {
      index = this.shiftUp(index);
    }
  }
  remove() {
    this.heap[0] = this.heap.pop();
    let index = 0;
    while (index && index < this.heap.length) {
      index = this.shiftDown(index);
    }
  }
}

module.exports = MaxHeap;
