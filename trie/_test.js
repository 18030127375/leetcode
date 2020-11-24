const Trie = require("./Trie");

/**
 * Trie
 */
let trie = new Trie();
trie.insert("app");
trie.insert("apple");
// console.log(trie.search("apple"));
console.log(trie.search("app"));
