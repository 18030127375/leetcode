const { levelOrder } = require("./LevelOrder");
const { maxDepth } = require("./MaxDepth");

function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * LevelOrder
 */
// let child = new Node(5),
//   child2 = new Node(6);
// let child3 = new Node(3, [child, child2]),
//   child4 = new Node(4),
//   child5 = new Node(5);
// let root = new Node(1, [child3, child4, child5]);

// console.log(levelOrder(root));

/**
 * MaxDepth
 */
let child = new Node(5),
  child2 = new Node(6);
let child3 = new Node(3, [child, child2]),
  child4 = new Node(4),
  child5 = new Node(5);
let root = new Node(1, [null, child3, child4, child5]);

console.log(maxDepth(root));
