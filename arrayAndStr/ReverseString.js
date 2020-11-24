/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let num = Math.floor((s.length - 1) / 2),
    end = s.length - 1;
  while (num >= 0) {
    [s[num], s[end - num]] = [s[end - num], s[num]];
    num--;
  }
};

module.exports.reverseString = reverseString;
