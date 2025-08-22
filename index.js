class TrieNode {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let cur = this.root;

    for (let c of word) {
      if (!cur.children.has(c)) {
        cur.children.set(c, new TrieNode());
      }

      cur = cur.children.get(c);
    }

    cur.end = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function dfs(index, root) {
      let cur = root;

      for (let i = index; i < word.length; i++) {
        if (word[i] == ".") {
          for (let child of cur.children.values()) {
            if (dfs(i + 1, child)) return true;
          }

          return false;
        } else {
          if (!cur.children.has(word[i])) {
            return false;
          } else {
            cur = cur.children.get(word[i]);
          }
        }
      }
      return cur.end;
    }

    dfs(0, this.root);
  }
}
