/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function helper(target, combine, idx) {
    if (idx >= candidates.length) return;
    if (target <= 0) {
      if (target === 0) res.push([...combine]);
      return;
    }
    helper(target, combine, idx + 1);
    if (target > 0) {
      helper(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  }
  helper(target, [], 0);
  return res;
};

module.exports.combinationSum = combinationSum;
