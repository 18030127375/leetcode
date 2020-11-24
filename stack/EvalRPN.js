/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let sta = [];
  let expression = {
    "+": (pre, next) => pre + next,
    "-": (pre, next) => pre - next,
    "*": (pre, next) => pre * next,
    "/": (pre, next) => Math.trunc(pre / next),
  };
  tokens.forEach((value) => {
    if (value in expression) {
      let next = sta.pop();
      let pre = sta.pop();
      let res = expression[value](pre, next);
      sta.push(Math.floor(res));
    } else {
      sta.push(Number(value));
    }
  });
  return sta[0];
};

module.exports.evalRPN = evalRPN;
