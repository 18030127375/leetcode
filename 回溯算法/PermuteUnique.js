/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  function helper(nums, track, indexs) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (
        indexs.includes(i) ||
        (nums[i] === nums[i - 1] && !indexs.includes(i - 1))
      )
        continue;
      indexs.push(i);
      track.push(nums[i]);
      helper(nums, track, indexs);
      indexs.pop();
      track.pop();
    }
  }
  nums.sort((a, b) => a - b);
  helper(nums, [], []);
  return res;
};

module.exports.permuteUnique = permuteUnique;
