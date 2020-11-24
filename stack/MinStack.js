/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let min = Math.min(
    this.data[0] == undefined ? Infinity : this.data[0].min,
    x
  );
  this.data.unshift({
    data: x,
    min,
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[0].data;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data[0].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;
