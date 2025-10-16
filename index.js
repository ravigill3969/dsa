/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let map = new Map();
  const seen = new Map();

  let max = -Infinity;

  function dfs(i, cs) {
    if (i >= s.length) {
      if (p(cs)) {
        max = Math.max(max, cs.length);
      }
      return;
    }
    if (i >= s.length) return 0;

    const key = i + "-" + cs;
    if (seen.has(key)) return;
    seen.set(key, true);

    dfs(i + 1, cs + s[i]);
    dfs(i + 1, cs);
  }

  dfs(0, "");

  console.log(max);
};

function p(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[r] != s[l]) {
      return false;
    }

    r--;
    l++;
  }

  return true;
}

longestPalindromeSubseq((s = "bbbab"));
