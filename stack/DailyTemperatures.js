/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let temp = T.map((value) => 0);
  let sta = [];
  T.forEach((value, index) => {
    excute(value, index);
  });

  function excute(value, index) {
    if (sta.length == 0 || value <= sta[sta.length - 1].value) {
      sta.push({
        value,
        index,
      });
    } else {
      let p = sta.pop();
      temp[p.index] = index - p.index;
      excute(value, index);
    }
  }

  return temp;
};

module.exports.dailyTemperatures = dailyTemperatures;
