/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let res, index;
  function helper(left, right) {
    if (left > right) {
      index = left;
      return;
    }
    let mid = parseInt((left + right) / 2);
    if (target === nums[mid]) {
      res = mid;
      return;
    } else if (target > nums[mid]) {
      helper(mid + 1, right);
    } else {
      helper(left, mid - 1);
    }
  }
  helper(0, nums.length - 1);
  if (res === undefined) {
    nums.splice(index, 0, target);
    res = index;
  }
  return res;
};

module.exports.searchInsert = searchInsert;
