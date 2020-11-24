/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function helper(str) {
    let end = str.length - 1,
      newStr = "";
    while (end >= 0) {
      newStr += str[end--];
    }
    return newStr;
  }
  let ss = s.split(" ");
  ss = ss.map((value) => helper(value));
  return ss.join(" ");
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
  let index = 0,
    start = 0,
    end,
    newStr = "";
  while (index <= s.length) {
    if (s[index] === " " || s[index] === undefined) {
      end = index - 1;
      while (start <= end) {
        newStr += s[end--];
      }
      if (s[index] === " ") newStr += " ";
      index++;
      start = index;
    } else {
      index++;
    }
  }
  return newStr;
};

module.exports.reverseWords = reverseWords2;
