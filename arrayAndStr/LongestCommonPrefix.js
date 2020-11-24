/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) return strs[0] || "";
  function helper(preStr, nextStr) {
    if (!preStr || !nextStr) return "";
    let index = 0,
      len = Math.min(preStr.length, nextStr.length);
    while (index <= len) {
      if (preStr[index] !== nextStr[index]) return preStr.substring(0, index);
      index++;
    }
    return preStr.substring(0, index);
  }
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    res = helper(res, strs[i]);
  }
  return res;
};

module.exports.longestCommonPrefix = longestCommonPrefix;
