/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x,
    res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid <= x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
