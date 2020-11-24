const MinStack = require("./MinStack");
const { isValid } = require("./ValidBrackets");
const { dailyTemperatures } = require("./DailyTemperatures");
const { evalRPN } = require("./EvalRPN");

/**
 * MinStack
 */
// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());

// minStack.pop();
// console.log(minStack.top());

// console.log(minStack.getMin());

/**
 * ValidBrackets
 */
// let str = "([)]";
// console.log(isValid(str));

/**
 * DailyTemperatures
 */
// let tempera = [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(tempera));

/**
 * EvalRPN
 */
let arr = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(arr));
