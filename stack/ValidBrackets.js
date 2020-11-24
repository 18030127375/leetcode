/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
  if (str.length % 2 === 1) {
    return false;
  }
  let pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let sta = [];
  let strs = str.split("");
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    if (pairs.has(s)) {
      if (sta.length == 0 || sta[sta.length - 1] !== pairs.get(s)) {
        return false;
      }
      sta.pop();
    } else {
      sta.push(s);
    }
  }
  return !sta.length;
};

module.exports.isValid = isValid;
