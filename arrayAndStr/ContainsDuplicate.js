/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {},
    index = 0;
  while (index < nums.length) {
    if (nums[index] in obj) return true;
    obj[nums[index]] = index++;
  }
  return false;
};

module.exports.containsDuplicate = containsDuplicate;
