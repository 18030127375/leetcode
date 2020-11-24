/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let index = 0,
    len = nums.length;
  while (index < len) {
    for (let i = 1; i <= k; i++) {
      if (nums[index + i] !== undefined) {
        let res =
          nums[index] > nums[index + i]
            ? nums[index] - nums[index + i]
            : nums[index + i] - nums[index];
        if (res <= t) return true;
      }
    }
    index++;
  }
  return false;
};

module.exports.containsNearbyAlmostDuplicate = containsNearbyAlmostDuplicate;
