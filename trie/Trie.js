/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.val = "";
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  function helper(word, index, trie) {
    if (index >= word.length) {
      trie.val = word;
      return;
    }

    let char = word[index];

    if (char in trie) {
      helper(word, ++index, trie.children[char]);
    } else {
      let nTrie = new Trie();
      nTrie.children = {};
      trie.children[char] = nTrie;
      helper(word, ++index, nTrie);
    }
  }
  helper(word, 0, this);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  function helper(word, index, trie) {
    if (word === trie.val) return true;

    if (index >= word.length) return false;

    let char = word[index];
    if (char in trie.children) {
      return helper(word, ++index, trie.children[char]);
    } else {
      return false;
    }
  }
  return helper(word, 0, this);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  function helper(word, index, trie) {
    if (index >= word.length) return true;

    let char = word[index];
    if (char in trie.children) {
      return helper(word, ++index, trie.children[char]);
    } else {
      return false;
    }
  }
  return helper(prefix, 0, this);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie;
