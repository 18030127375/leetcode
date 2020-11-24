/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  function getGenerateParenthesis(str, left, right) {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    if (left === right) {
      getGenerateParenthesis(`${str}(`, left - 1, right);
    } else {
      if (left > 0) {
        getGenerateParenthesis(`${str}(`, left - 1, right);
      }
      getGenerateParenthesis(`${str})`, left, right - 1);
    }
  }
  getGenerateParenthesis("", n, n);
  return res;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function (n) {
  let res = [];
  function helper(left, right, str) {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    if (left !== 0) {
      str += "(";
      helper(left - 1, right, str);
      str = str.substring(0, str.length - 1);
    }
    if (left < right) {
      str += ")";
      helper(left, right - 1, str);
      str = str.substring(0, str.length - 1);
    }
  }
  helper(n, n, "");
  return res;
};

module.exports.generateParenthesis = generateParenthesis2;
