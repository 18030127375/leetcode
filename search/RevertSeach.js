/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  while (len > 0) {
    if (nums[len] > nums[0]) {
      break;
    }
    len--;
  }
  let left, right, mid;
  if (nums[0] > target) {
    left = len + 1;
    right = nums.length - 1;
  } else {
    left = 0;
    right = len;
  }
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

module.exports.search = search;
