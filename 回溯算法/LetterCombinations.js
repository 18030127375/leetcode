/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  let table = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let useTables = digits.split("").map((value) => table[value]);
  let res = [];
  function helper(str, index) {
    if (str.length === digits.length) {
      res.push(str);
      return;
    }
    let useTable = useTables[index];
    for (let i = 0; i < useTable.length; i++) {
      str += useTable[i];
      helper(str, ++index);
      str = str.substring(0, str.length - 1);
      index--;
    }
  }
  helper("", 0);
  return res;
};
