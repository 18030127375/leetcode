/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur,
    index = 0,
    flag = 0;
  while (index < nums.length) {
    if (cur !== nums[index]) {
      cur = nums[flag] = nums[index];
      flag++;
    }
    index++;
  }
  return flag;
};

module.exports.removeDuplicates = removeDuplicates;
