/**
 * backtrack
 * 全排列
 */

let backtrack = function (nums) {
  let res = [];
  function helper(nums, track) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) continue;
      track.push(nums[i]);
      helper(nums, track);
      track.pop();
    }
  }
  helper(nums, []);
  return res;
};

module.exports.backtrack = backtrack;
